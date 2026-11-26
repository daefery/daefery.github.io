'use client'

import { useEffect, useState } from 'react'
import { home, type HomeCopy } from '@/i18n/home'

// Who speaks and the tone of each line; the words come from the page language.
const shape = [
  { who: 'agent', tone: '' },
  { who: 'agent', tone: 'claim' },
  { who: 'gate', tone: '' },
  { who: 'gate', tone: 'bad' },
  { who: 'agent', tone: '' },
  { who: 'gate', tone: 'ok' },
] as const

export default function VerificationConsole({ copy = home.en.console }: { copy?: HomeCopy['console'] }) {
  const steps = shape.map((s, i) => ({ who: copy.who[s.who], text: copy.steps[i], tone: s.tone }))
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
      aria-label={copy.aria}
    >
      <div className="in">
        <div className="top">
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <i aria-hidden="true" />
          <span>verify --close-on-evidence</span>
          <em data-console-state>
            {complete ? copy.verified : running ? copy.running : copy.paused}
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
            <h4>{copy.ledger}</h4>
            <div className="ledger-row">
              <span>{copy.agentSays}</span>
              <b>{count >= 2 ? copy.done : copy.waiting}</b>
            </div>
            <div className="ledger-row">
              <span>{copy.checks}</span>
              <b className={complete ? 'st-closed' : failed ? 'st-open' : ''}>
                {complete
                  ? copy.passing
                  : failed
                    ? copy.failing
                    : count >= 3
                      ? copy.running
                      : copy.waiting}
              </b>
            </div>
            <div className="ledger-row">
              <span>{copy.attempts}</span>
              <b>{count >= 5 ? 2 : count >= 1 ? 1 : 0}</b>
            </div>
            <div className="ledger-row">
              <span>{copy.status}</span>
              <b className={complete ? 'st-closed' : 'st-open'}>
                {complete ? copy.closed : copy.open}
              </b>
            </div>
          </div>
        </div>
        <button type="button" className="console-control" onClick={toggle}>
          {complete
            ? copy.replay
            : running
              ? copy.pause
              : copy.resume}
        </button>
      </div>
    </div>
  )
}
