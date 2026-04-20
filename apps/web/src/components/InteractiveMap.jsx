import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import pb from '@/lib/pocketbaseClient';
import { Skeleton } from '@/components/ui/skeleton';

// Fix Leaflet's default icon paths issue with Webpack/Vite
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
});

/**
 * Renders an interactive map with village locations.
 */
function InteractiveMap() {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const records = await pb.collection('map_locations').getFullList({
          $autoCancel: false,
          sort: 'village_name'
        });
        setLocations(records);
      } catch (error) {
        console.error('Error fetching map locations:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchLocations();
  }, []);

  if (loading) {
    return <Skeleton className="w-full h-[500px] rounded-2xl" />;
  }

  // Default center if no locations (Baran district approximate)
  const center = locations.length > 0 
    ? [locations[0].latitude, locations[0].longitude] 
    : [25.1011, 76.5132];

  return (
    <div className="rounded-2xl overflow-hidden border border-border/50 shadow-sm h-[500px] relative z-0">
      <MapContainer center={center} zoom={10} className="w-full h-full">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map((loc) => (
          <Marker key={loc.id} position={[loc.latitude, loc.longitude]}>
            <Popup className="rounded-xl">
              <div className="p-1">
                <h4 className="font-serif font-bold text-base mb-1">{loc.village_name}</h4>
                {loc.description && (
                  <p className="text-sm text-muted-foreground mb-2">{loc.description}</p>
                )}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default InteractiveMap;