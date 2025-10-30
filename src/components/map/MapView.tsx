'use client'

import { useEffect, useRef } from 'react'
import maplibregl from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'

export default function MapView() {
  const mapContainer = useRef<HTMLDivElement | null>(null)
  const map = useRef<maplibregl.Map | null>(null)

  // Titik lokasi Beji Timur, Depok (contoh Kedai Bang Udin)
  const coordinates = { lat: -6.373155, lng: 106.823769 }

  useEffect(() => {
    if (map.current || !mapContainer.current) return // mencegah re-inisialisasi

    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: 'https://demotiles.maplibre.org/style.json', // free MapLibre style
      center: [coordinates.lng, coordinates.lat],
      zoom: 15,
    })

    // Tambahkan marker
    new maplibregl.Marker({ color: '#0090FF' })
      .setLngLat([coordinates.lng, coordinates.lat])
      .setPopup(
        new maplibregl.Popup({ offset: 25 }).setHTML(
          `<h3>Kedai Bang Udin</h3><p>Beji Timur, Depok</p>`
        )
      )
      .addTo(map.current)

    // Tambahkan kontrol navigasi (zoom & rotate)
    map.current.addControl(new maplibregl.NavigationControl(), 'top-right')

    return () => {
      map.current?.remove()
    }
  }, [])

  return (
    <div
      ref={mapContainer}
      className="w-full h-[400px] rounded-2xl shadow-md border border-gray-300"
    />
  )
}