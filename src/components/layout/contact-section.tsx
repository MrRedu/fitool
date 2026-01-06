import Link from 'next/link'
import { Instagram, TikTok, WhatsApp } from '../atoms/icons'
import { SectionContainer } from './section-container'

export const ContactSection = () => {
  return (
    <div className="flex w-full justify-center" id="contact">
      <section className="relative rounded-t-2xl rounded-b-[36px] bg-linear-to-b from-red-50 via-background to-background py-32 lg:mx-4 dark:from-red-950 w-full">
        <SectionContainer verticalPadding="py-0">
          <h2 className="text-center text-4xl font-semibold tracking-tight lg:text-5xl">
            {`¡Contáctanos!`}
          </h2>
          <p className="mt-4 text-center leading-snug font-medium text-muted-foreground lg:mx-auto">
            Hopefully this form gets through our spam filters.
          </p>
          <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
            <div>
              <h2 className="font-semibold">Oficina corporativa</h2>
              <p className="mt-3 text-muted-foreground">
                Centro Comercial FiTool <br /> 2117 Palo Negro, Aragua
              </p>
            </div>
            <div>
              <h2 className="font-semibold">Contacto</h2>
              <div className="mt-3">
                <div className="flex flex-col">
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    hi@fitool.com
                  </Link>
                  <Link
                    href="#"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    +58 412-800-00
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-semibold">Síguenos</h2>
              <div className="mt-3 flex gap-6 lg:gap-10">
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  {/* <User size={24} /> */}
                  <Instagram className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <TikTok className="size-6" />
                </Link>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground"
                >
                  <WhatsApp className="size-6" />
                </Link>
              </div>
            </div>
          </div>
          {/* Separator */}
          <div className="relative text-muted-foreground h-px w-full my-12">
            <div className="h-px w-full bg-[repeating-linear-gradient(90deg,transparent,transparent_4px,currentColor_4px,currentColor_10px)] [mask-image:linear-gradient(90deg,transparent,black_25%,black_75%,transparent)]" />
          </div>
          {/* Map */}
          <div
            className="relative w-full h-full min-h-[420px] rounded overflow-hidden 
            bg-[url('/contact/map.webp')] bg-center bg-cover
            border
          "
          >
            <div className="absolute bottom-0 md:bottom-8 left-0 md:left-8 right-0 md:max-w-md px-4 py-6  w-full md:rounded  bg-white flex flex-col justify-between gap-6">
              <div>
                <h2 className="mb-4 text-xl font-medium md:text-2xl">
                  Aragua, Venezuela
                </h2>
                <p className="text-muted-foreground">
                  Centro Comercial FiTool, Palo Negro, 2117
                </p>
              </div>
              <Link
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Ver en Google Maps
              </Link>
            </div>
            {/* <img
              src={'/hero/2.webp'}
              className={'absolute inset-0 opacity-50'}
            /> */}
          </div>
        </SectionContainer>
      </section>
    </div>
  )
}
