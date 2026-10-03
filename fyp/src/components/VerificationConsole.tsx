'use client'

import { useEffect, useState } from 'react'

const steps = [
  { who: 'agent', text: 'edit 3 files, run tests', tone: '' },
  { who: 'agent', text: '"done, all tests pass"', tone: 'claim' },
  { who: 'gate', text: "run the project's own checks …", tone: '' },
  { who: 'gate', text: '✗ 2 failing → task stays open', tone: 'bad' },
  { who: 'agent', text: 'fix the failures, try again', tone: '' },
  { who: 'gate', text: '✓ all checks pass → closed on evidence', tone: 'ok' },
]

export default function VerificationConsole() {
  // Render a complete illustration for crawlers, no-JS and reduced-motion visitors.
  const [count, setCount] = useState(steps.length)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (!preference.matches) {
      setCount(0)
      setRunning(true)
    }
    const stopForReducedMotion = () => {
      if (preference.matches) {
        setRunning(false)
        setCount(steps.length)
      }
    }
    preference.addEventListener('change', stopForReducedMotion)
    return () => preference.removeEventListener('change', stopForReducedMotion)
  }, [])

  useEffect(() => {
    if (!running || count === steps.length) return
    const timer = window.setTimeout(
      () => setCount((previous) => previous + 1),
      1150,
    )
    return () => window.clearTimeout(timer)
  }, [count, running])

  const complete = count === steps.length
  const failed = count >= 4 && !complete
  const toggle = () => {
    if (complete) {
      setCount(0)
      setRunning(true)
    } else setRunning((previous) => !previous)
  }

  return (
    <div
      className="console"
      role="group"
      aria-label="Illustration of how an agent's work gets verified"
    >
      <div className="in">
        <div className="top">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>verify --close-on-evidence</span>
          <em data-console-state>
            {complete ? 'verified' : running ? 'running' : 'paused'}
          </em>
        </div>
        <div className="body">
          <div className="log">
            {steps.slice(0, count).map((step, index) => (
              <div className="on" key={index}>
                <span className="who">{step.who}</span>
                <span className={step.tone}>{step.text}</span>
              </div>
            ))}
          </div>
          <div className="ledger">
            <h4>Task ledger</h4>
            <div className="ledger-row">
              <span>Agent says</span>
              <b>{count >= 2 ? '"done"' : 'waiting'}</b>
            </div>
            <div className="ledger-row">
              <span>Project checks</span>
              <b className={complete ? 'st-closed' : failed ? 'st-open' : ''}>
                {complete
                  ? 'passing'
                  : failed
                    ? '2 failing'
                    : count >= 3
                      ? 'running'
                      : 'waiting'}
              </b>
            </div>
            <div className="ledger-row">
              <span>Attempts</span>
              <b>{count >= 5 ? 2 : count >= 1 ? 1 : 0}</b>
            </div>
            <div className="ledger-row">
              <span>Status</span>
              <b className={complete ? 'st-closed' : 'st-open'}>
                {complete ? 'closed' : 'open'}
              </b>
            </div>
          </div>
        </div>
        <button type="button" className="console-control" onClick={toggle}>
          {complete
            ? 'Replay illustration'
            : running
              ? 'Pause illustration'
              : 'Resume illustration'}
        </button>
      </div>
    </div>
  )
}
