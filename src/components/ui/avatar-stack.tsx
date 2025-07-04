import React from 'react';
import { cn } from '@/lib/utils';

interface AvatarStackProps {
  className?: string;
}

export function AvatarStack({ className }: AvatarStackProps) {
  const avatars = [
    {
      name: "Carlos Silva",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Ana Santos",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Roberto Costa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Fernanda Lima",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Eduardo Martins",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face",
    },
    {
      name: "Mariana Oliveira",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
    },
  ];

  return (
    <div className={cn("flex flex-col items-center space-y-4", className)}>
      {/* Título de Credibilidade */}
      <h3 className="text-sm text-muted-foreground text-center max-w-md">
        Confiado por empreendedores e fundadores de todo o Brasil
      </h3>
      
      {/* Stack de Avatares */}
      <div className="flex items-center justify-center">
        <div className="flex">
          {avatars.map((avatar, index) => (
            <div key={index} className={`group relative ${index !== avatars.length - 1 ? '-mr-3' : ''}`}>
              <img
                alt={avatar.name}
                src={avatar.image}
                className="relative h-10 w-10 rounded-full border-2 border-black object-cover object-top transition duration-500 group-hover:z-30 group-hover:scale-105 shadow-lg"
              />
            </div>
          ))}
        </div>
        
        {/* Rating com Estrelas */}
        <div className="ml-4 flex items-center space-x-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="h-4 w-4 fill-yellow-400 text-yellow-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="ml-2 text-sm text-muted-foreground">5.0</span>
        </div>
      </div>
      
      {/* Texto adicional */}
      <p className="text-xs text-muted-foreground text-center">
        6K+ empresas transformadas
      </p>
    </div>
  );
} 