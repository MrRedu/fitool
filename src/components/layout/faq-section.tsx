import { Clock, Heart, Home, Wallet } from 'lucide-react'

export const FAQSection = () => {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-32">
      <div className="container w-full mx-auto">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-3xl font-semibold md:text-5xl lg:mx-14 text-balance">
            ¿Por qué elegir nuestro gimnasio para transformar tu vida?
          </h2>
          <ul className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            <li className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 md:gap-2.5">
                <Heart size={24} />
                <h3 className="font-semibold md:text-lg">
                  Mejora tu salud integral
                </h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                {`Entrenar con nosotros no solo transforma tu físico, sino que reduce el estrés, mejora tu salud cardiovascular y aumenta tu energía diaria.`}
              </p>
            </li>
            <li className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 md:gap-2.5">
                <Wallet size={24} />
                <h3 className="font-semibold md:text-lg">Planes a tu medida</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                {`Ofrecemos membresías flexibles y competitivas sin cargos ocultos, diseñadas para que invertir en tu bienestar sea accesible y sencillo.`}
              </p>
            </li>
            <li className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 md:gap-2.5">
                <Clock size={24} />
                <h3 className="font-semibold md:text-lg">
                  Flexibilidad de horario
                </h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                {`Olvida las excusas. Nuestras instalaciones están abiertas en horarios extendidos para que puedas entrenar antes del trabajo o al finalizar tu jornada.`}
              </p>
            </li>
            <li className="flex flex-col gap-2.5">
              <div className="flex items-center gap-2 md:gap-2.5">
                <Home size={24} />
                <h3 className="font-semibold md:text-lg">Comunidad y apoyo</h3>
              </div>
              <p className="text-sm text-muted-foreground md:text-base">
                {`Más que un gimnasio, somos una comunidad. Contamos con instructores certificados que te guiarán en cada paso para asegurar que cumplas tus metas.`}
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
