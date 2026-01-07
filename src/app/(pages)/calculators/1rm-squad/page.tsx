import { CatalogGrid } from '@/components/molecules/catalog-grid'
import { OneRMSquadCalculator } from '@/components/organisms/calculators/1rm-squad-calculator'
import { Typography } from '@/components/ui/typography'
import { CALCULATORS } from '@/lib/constants'
import { Calculator } from 'lucide-react'

export default function Calculator1RMSquadPage() {
  return (
    <article className="">
      <header className="bg-[url('/cover-page.webp')] bg-cover bg-center bg-no-repeat text-white pt-40 pb-20">
        <div className="flex items-center justify-center gap-3">
          <Calculator className="h-8 w-8 hidden md:block" />
          <Typography variant="h1">Calculadora de 1RM Sentadilla</Typography>
        </div>
        <Typography className="text-center mt-2!">
          Calcula tu repetición máxima aproximada en sentadilla.
        </Typography>
      </header>

      <div className="max-w-4xl m-auto lg:p-16 p-8 space-y-16">
        <section className="text-center space-y-4">
          <Typography variant="large">
            Con esta <strong>calculadora automática</strong> podrás saber cuál
            es tu <strong>1RM aproximado</strong> en sentadilla basándote en el
            peso que utilizas y las repeticiones que realizas al fallo.
          </Typography>
          <Typography variant="large">
            Puedes introducir un segundo peso y número de repeticiones para que
            el cálculo sea <strong>más preciso</strong>.
          </Typography>
        </section>
        <OneRMSquadCalculator />
        {/* TODO: Add more content */}
        <section className="space-y-4">
          <Typography variant="h2">
            Calculadora de repetición máxima en sentadilla
          </Typography>
          <Typography>
            La <strong>sentadilla trasera</strong> es uno de los ejercicios de
            fuerza más populares, respetados y mejor investigados.
          </Typography>
          <Typography>
            No solo tiene aplicaciones importantes para el{' '}
            <strong>rendimiento deportivo</strong>, formando parte, incluso de
            los movimientos básicos de competición, en el deporte de{' '}
            <strong>powerlifting</strong>, sino que también se usa a menudo en
            el ámbito de la <strong>rehabilitación</strong> y la{' '}
            <strong>salud</strong>.
          </Typography>
          <Typography>
            Una de las variables fundamentales del entrenamiento de sentadilla,
            y de cualquier otro ejercicio, es la <strong>intensidad</strong>,
            que se mide generalmente como el porcentaje de la capacidad máxima
            de ejercer fuerza en un determinado ejercicio (
            <strong>% 1RM</strong>
            ).
          </Typography>
          <Typography>
            Para conocer la intensidad de trabajo de una rutina de
            entrenamiento, <strong>calcular el 1RM es parte importante</strong>{' '}
            de la programación, así que, conocer el 1RM en sentadilla será de
            gran utilidad para los objetivos que nos propongamos conseguir a
            través del ejercicio.
          </Typography>
          <Typography variant="h2">
            ¿Cuál es la fórmula para calcular el 1 RM en sentadilla?
          </Typography>
          <Typography>
            Tradicionalmente, hay algunas ecuaciones que se utilizan para
            calcular el 1RM de los ejercicios de manera indirecta, a través de{' '}
            <strong>pruebas al fallo con pesos moderados</strong>.
          </Typography>
          <Typography>
            Quizás las más populares son las de <strong>Epley (1985)</strong> y{' '}
            <strong>Bryzcki (1993)</strong>. No obstante,{' '}
            <strong>todas las ecuaciones cuentan con un margen de error</strong>{' '}
            determinado ya que no son test reales de 1RM al fallo, sino
            regresiones estimadas a partir de cargas submáximas.
          </Typography>
          <Typography>
            Curiosamente, las diferentes ecuaciones que podemos encontrar en la
            bibliografía, tienen{' '}
            <strong>niveles de precisión diferentes</strong>, dependiendo del
            ejercicio, en el que se pretenda estimar el 1RM.
          </Typography>
          <Typography>
            LeSuer et al. (1997) analizaron qué ecuaciones predecían con mayor
            acierto el 1RM en los tres movimientos de competición en
            powerlifting, concluyendo que, para el caso de la sentadilla,{' '}
            <strong>
              las ecuaciones de Epley (1985) y Wathan (1994) son las que menos
              margen de error demostraban
            </strong>
            .
          </Typography>
          <Typography>
            De cualquier modo, siempre es recomendable que,{' '}
            <strong>si se quiere conseguir un margen de error más bajo</strong>{' '}
            y ajustar el resultado a cada caso personal, se faciliten{' '}
            <strong>dos pesos diferentes</strong> llevados al fallo y el número
            de repeticiones realizadas con cada peso.
          </Typography>
          <Typography variant="h2">
            ¿Qué tan fiable es esta calculadora?
          </Typography>
          <Typography>
            Como hemos mencionado, toda predicción estimada cuenta con un cierto{' '}
            <strong>margen de error</strong>. En el caso de las ecuaciones de{' '}
            <strong>Epley (1985) y Wathan (1994)</strong> utilizadas para
            calcular el 1RM en sentadilla, este margen es del{' '}
            <strong>3% y 2%, respectivamente</strong>.
          </Typography>
          <Typography>
            Sin embargo, conociendo este dato, hemos intentado ajustar la
            estimación al máximo posible aplicando un{' '}
            <strong>factor de corrección</strong> para cada una de ellas. Así
            que, finalmente, al introducir un único dato de peso utilizado con
            las correspondientes repeticiones realizadas al fallo, la
            calculadora realiza el cálculo promediando ambas fórmulas.
          </Typography>
          <Typography>
            De nuevo, recordamos que la mejor recomendación que podemos dar{' '}
            <strong>para calcular tu 1RM</strong> es{' '}
            <strong>incluir dos pesos diferentes llevados al fallo</strong> y el
            número de repeticiones realizadas con cada peso.
          </Typography>
          <Typography variant="h2">
            ¿Para qué sirve saber el 1RM en sentadilla?
          </Typography>
          <Typography>
            Saber tu 1RM en sentadilla es importante ya que proporciona una
            medida de tu fuerza máxima en ese{' '}
            <strong>movimiento específico y en un determinado momento</strong>{' '}
            de la temporada, sirviendo así como referencia para la{' '}
            <strong>
              manipulación de variables del entrenamiento y evaluación de los
              resultados
            </strong>{' '}
            que van consiguiéndose con la rutina.
          </Typography>
        </section>
      </div>

      <footer className="max-w-6xl m-auto lg:p-16 p-8 space-y-16">
        <CatalogGrid
          title="Otras calculadoras relacionadas"
          items={CALCULATORS}
        />
      </footer>
    </article>
  )
}
