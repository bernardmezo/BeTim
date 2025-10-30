import dynamic from 'next/dynamic';

const DynamicMapView = dynamic(() => import('./MapView'), {
  ssr: false,
  loading: () => <div className="w-full h-[400px] bg-gray-200 rounded-2xl animate-pulse" />
});

export default DynamicMapView;
