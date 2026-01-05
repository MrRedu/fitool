import { Check, X } from 'lucide-react';

// HarrisBenedict calculator

export const GENDERS_OPTIONS = [
  { value: 'male', label: 'Hombre' },
  { value: 'female', label: 'Mujer' },
];

export const ACTIVITY_LEVELS = [
  {
    value: 'sedentary',
    label: 'Sedentario: poco o ningún ejercicio al día',
  },
  {
    value: 'lightly-active',
    label: 'Actividad ligera: ejercicio ligero o deporte 1-3 días a la semana',
  },
  {
    value: 'moderately-active',
    label:
      'Activad moderada: ejercicio moderado o deporte 3-5 días a la semana',
  },
  {
    value: 'very-active',
    label:
      'Actividad intensa: ejercicio intenso o deporte 6-7 días a la semana',
  },
  {
    value: 'extra-active',
    label: 'Actividad extra activa: ejercicio muy intenso o deporte a diario',
  },
];

export const OBJECTIVE_OPTIONS = [
  { value: 'lose-weight', label: 'Perder peso' },
  { value: 'maintain-weight', label: 'Mantener peso' },
  { value: 'gain-weight', label: 'Ganar peso' },
];

export const TITLE_OPTIONS = {
  'calorie-deficit': 'Las calorías para estar en déficit calórico',
  maintenance: 'Las calorías para mantenimiento',
  'caloric-surplus': 'Las calorías para estar en superávit calórico',
};

export const LEVELS_OPTIONS = {
  light: 'Ligero',
  moderate: 'Moderado',
  aggressive: 'Agresivo',
  maintenance: 'Mantenimiento',
};

// RoutineCreator

export const EXERCISE_DURATIONS_OPTIONS = [
  { label: 'Repeticiones', value: 'reps' },
  { label: 'Segundos', value: 'seconds' },
  { label: 'Minutos', value: 'minutes' },
];

export const UNIT_WEIGHT_OPTIONS = [
  { label: 'kg', value: 'kg' },
  { label: 'lb', value: 'lb' },
];

export const DURATION_TYPES_MAPPING = {
  reps: 'reps',
  seconds: 's',
  minutes: 'min',
} as const;

// TODO: Something

export const CALCULATORS = [
  {
    name: 'Calculadora de Calorías (Harris-Benedict)',
    href: '/calculators/harris-benedict',
    imgSrc: '/calculators/cover-harris-benedict.webp',
  },
];

export const TOOLS = [
  {
    name: 'Creador de rutina',
    href: '/tools/routine-creator',
    imgSrc: '/tools/cover-routine-creator.webp',
  },
];

// Landing sections

export const IMAGES_HERO_SECTION = [
  {
    src: '/hero/1.webp',
    alt: 'img',
  },
  {
    src: '/hero/2.webp',
    alt: 'img',
  },
  {
    src: '/hero/3.webp',
    alt: 'img',
  },
  {
    src: '/hero/4.webp',
    alt: 'img',
  },
  {
    src: '/hero/5.webp',
    alt: 'img',
  },
  {
    src: '/hero/6.webp',
    alt: 'img',
  },
];

export const STEPS_SECTION = [
  {
    id: 'discovery',
    number: '01',
    title: 'Rookie',
    heading: 'Adaptación y hábito',
    description:
      'Te familiarizarás con las máquinas y la técnica correcta. El enfoque principal es crear la disciplina de asistir y despertar tu metabolismo.',
    progress: 25,
    duration: 'Semanas 1 a 4',
  },
  {
    id: 'transformation',
    number: '02',
    title: 'Amateur',
    heading: 'Resultados visibles',
    description:
      'Tu fuerza aumenta notablemente y notarás cambios en tu composición corporal. Es el punto donde el ejercicio se convierte en un estilo de vida.',
    progress: 60,
    duration: '~12 semanas',
  },
  {
    id: 'mastery',
    number: '03',
    title: 'Intermediate',
    heading: 'Atleta y estilo de Vida',
    description:
      'Has alcanzado una versión física superior. Ahora el objetivo es el mantenimiento avanzado, la salud a largo plazo y la superación de récords personales.',
    progress: 100,
    duration: 'Meta cumplida',
  },
];

export const PLANS_PRICING_SECTION = [
  {
    title: 'Restringido',
    price: { monthly: '$30', annually: '$300' },
    href: '#',
    recommended: false,
  },
  {
    title: 'Héroe',
    price: { monthly: '$45', annually: '$450' },
    href: '#',
    recommended: false,
  },
  {
    title: 'FiToolers',
    price: { monthly: '$90', annually: '$900' },
    href: '#',
    recommended: true,
  },
  {
    title: 'Enérgico',
    price: { monthly: '$60', annually: '$600' },
    href: '#',
    recommended: false,
  },
];

export const FEATURE_MATRIX_PRICING_SECTION = [
  {
    title: 'Beneficios incluidos (Todos los planes)',
    features: [
      {
        title: 'Comodidades básicas',
        info: 'Café gratis, Lockers, Seguridad y Wifi en todas las áreas.',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
      {
        title: 'Instalaciones',
        info: 'Acceso a duchas, vestidores y estacionamiento privado.',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
    ],
  },
  {
    title: 'Áreas y disciplinas',
    features: [
      {
        title: 'Musculación y Cardio',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          {
            plan: 'Enérgico',
            content: <X className="size-5 text-muted-foreground" />,
          },
        ],
      },
      {
        title: 'Crossfit y Funcional',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          {
            plan: 'Enérgico',
            content: <X className="size-5 text-muted-foreground" />,
          },
        ],
      },
      {
        title: 'Ciclismo (Bike/Spinning)',
        info: 'Xtreme Bike y Spinning convencional.',
        inclusions: [
          {
            plan: 'Restringido',
            content: <X className="size-5 text-muted-foreground" />,
          },
          {
            plan: 'Héroe',
            content: <X className="size-5 text-muted-foreground" />,
          },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: <Check className="size-5" /> },
        ],
      },
    ],
  },
  {
    title: 'Condiciones de Acceso',
    features: [
      {
        title: 'Horario Restringido',
        info: 'Horario completo: Lunes a sábados de 6:00am hasta las 9:00pm.',
        inclusions: [
          { plan: 'Restringido', content: 'Solo de 11:30 a 1:30' },
          { plan: 'Héroe', content: 'Horario Completo' },
          { plan: 'FiToolers', content: 'Horario Completo' },
          { plan: 'Enérgico', content: 'Por Clase' },
        ],
      },
      {
        title: 'Entrenador Personalizado',
        inclusions: [
          { plan: 'Restringido', content: <Check className="size-5" /> },
          { plan: 'Héroe', content: <Check className="size-5" /> },
          { plan: 'FiToolers', content: <Check className="size-5" /> },
          { plan: 'Enérgico', content: 'Instructor de Clase' },
        ],
      },
    ],
  },
];

export const MEMBERS_TEAM_SECTION = [
  {
    name: 'John Doe',
    role: 'Monitor de sala',
    image: '/hero/1.webp',
  },
  {
    name: 'Jane Smith',
    role: 'Entrenador',
    image: '/hero/1.webp',
  },
  {
    name: 'Mike Johnson',
    role: 'Fisioterapeuta',
    image: '/hero/1.webp',
  },
  {
    name: 'Sarah Williams',
    role: 'Monitor de sala',
    image: '/hero/1.webp',
  },
  {
    name: 'David Chen',
    role: 'Entrenador',
    image: '/hero/1.webp',
  },
  {
    name: 'Emily Brown',
    role: 'Fisioterapeuta',
    image: '/hero/1.webp',
  },
];
