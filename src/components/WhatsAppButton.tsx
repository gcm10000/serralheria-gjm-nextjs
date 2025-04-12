// src/components/WhatsAppButton.tsx
'use client'
import Link from 'next/link'

export default function WhatsAppButton() {
  return (
    <Link
      href="https://wa.me/5521993489060?text=Ol%C3%A1%2C%20estou%20interessado%20nos%20servi%C3%A7os%20de%20Serralheria%20GJM."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="w-14 h-14 hover:scale-110 transition-transform"
      />
    </Link>
  )
}