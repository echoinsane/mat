export interface IProject {
  img: string;
  header: string;
  description?: string;
  small?: boolean;
}

export const projects: IProject[] = [
  {
    img: 'app/main/images/project-1.png',
    header: 'Свадьба Тамары и Кирилла',
    description: 'Место проведения: яхт-клуб «Водник»'
  },
  {
    img: 'app/main/images/project-2.png',
    header: 'Свадьба Дарьи и Дмитрия',
    small: true
  },
  {
    img: 'app/main/images/project-3.png',
    header: 'Свадьба Александры и Александра',
    small: true
  }
];

