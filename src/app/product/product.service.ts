import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts() {
    return [
      {
        id: 1,
        name: 'Cadeira',
        description: 'Uma cadeira confortável para relaxar.',
        price: 50.0,
        imageUrl: 'https://picsum.photos/seed/1/600',
      },
      {
        id: 2,
        name: 'Videogame',
        description: 'Um videogame de última geração para jogar.',
        price: 299.99,
        imageUrl: 'https://picsum.photos/seed/2/600',
      },
      {
        id: 3,
        name: 'Cama',
        description: 'Uma cama king-size para uma boa noite de sono.',
        price: 399.0,
        imageUrl: 'https://picsum.photos/seed/3/600',
      },
      // Adicione mais produtos aqui...
      {
        id: 4,
        name: 'Smartphone',
        description: 'Um smartphone com câmera de alta qualidade.',
        price: 199.99,
        imageUrl: 'https://picsum.photos/seed/4/600',
      },
      {
        id: 5,
        name: 'Mesa de Jantar',
        description: 'Uma mesa de jantar elegante para refeições em família.',
        price: 149.0,
        imageUrl: 'https://picsum.photos/seed/5/600',
      },
      {
        id: 6,
        name: 'Notebook',
        description: 'Um notebook poderoso para trabalho e entretenimento.',
        price: 699.0,
        imageUrl: 'https://picsum.photos/seed/6/600',
      },
      {
        id: 7,
        name: 'Televisão 4K',
        description: 'Uma televisão com qualidade de imagem 4K.',
        price: 499.0,
        imageUrl: 'https://picsum.photos/seed/7/600',
      },
      {
        id: 8,
        name: 'Sofá',
        description: 'Um sofá confortável para relaxar na sala de estar.',
        price: 299.0,
        imageUrl: 'https://picsum.photos/seed/8/600',
      },
      {
        id: 9,
        name: 'Bicicleta',
        description: 'Uma bicicleta para passeios ao ar livre.',
        price: 199.0,
        imageUrl: 'https://picsum.photos/seed/9/600',
      },
      {
        id: 10,
        name: 'Forno de Micro-ondas',
        description: 'Um forno de micro-ondas para aquecer alimentos rapidamente.',
        price: 79.99,
        imageUrl: 'https://picsum.photos/seed/10/600',
      },
    ];
  }
}
