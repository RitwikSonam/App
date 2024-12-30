import React from 'react';

interface TimeCardProps {
  label: string;
  value: number;
}

export function TimeCard({ label, value }: TimeCardProps) {
  return (
    <div className="bg-white/10 backdrop-blur-lg rounded-lg p-6 text-center">
      <div className="text-4xl md:text-6xl font-bold mb-2">{value}</div>
      <div className="text-purple-200 text-lg">{label}</div>
    </div>
  );
}