export default function PageFooter({ col12 = false }: { col12?: boolean }) {
  return (
    <footer className={`card-footer${col12 ? ' col-12' : ''}`}>
      <p className="small opacity-50 fw-bold">
        © {new Date().getFullYear()} Fery Yundara Putera.
      </p>
    </footer>
  )
}
