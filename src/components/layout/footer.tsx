import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const SOCIAL_LINKS = [
  // {
  //   name: 'LinkedIn',
  //   href: '#',
  // },
  {
    name: 'Instagram',
    href: '#',
  },
  {
    name: 'TikTok',
    href: '#',
  },
  // {
  //   name: 'Facebook',
  //   href: '#',
  // },
  // {
  //   name: 'Twitter',
  //   href: '#',
  // },
]

const LINKS = [
  {
    name: 'Inicio',
    href: '/',
  },
  {
    name: 'Herramientas',
    href: '#',
  },
  {
    name: 'Calculadoras',
    href: '#',
  },
  {
    name: 'Membresías',
    href: '/#pricing',
  },
  {
    name: 'Contacto',
    href: '/#contact',
  },
]

export const Footer = () => {
  return (
    <section className="dark bg-background text-foreground w-full px-4 md:px-6 lg:px-8 py-32">
      <div className="container mx-auto w-full">
        <div className="flex flex-col justify-between gap-15 lg:flex-row">
          <div className="flex flex-col gap-10">
            <p className="relative text-4xl font-medium tracking-tight lg:text-5xl">
              ¡Desbloquea tu máximo potencial ahora!
            </p>
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Obtén asistencia: </p>
              <a href="#">hi@fitool.com</a>
            </div>
          </div>
          <div className="grid w-full max-w-xs grid-cols-2 gap-10 text-sm font-light lg:text-base">
            <ul className="space-y-1">
              {LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="tracking-tight text-foreground hover:text-foreground/30"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="space-y-1">
              {SOCIAL_LINKS.map(link => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-1 tracking-tight text-foreground hover:text-foreground/30"
                  >
                    {link.name} <ArrowUpRight size={14} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-20 flex flex-col justify-between gap-15 lg:flex-row">
          <div className="flex w-full max-w-md flex-col gap-10">
            <div className="space-y-1 text-sm font-light tracking-tight lg:text-base">
              <p>Suscríbete al boletín informativo:</p>
              <form
                className="flex w-full items-end border-b border-b-foreground/10"
                action="#"
              >
                <Input
                  className="file:text-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 bg-transparent text-base transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive mt-10 rounded-none border-0 !bg-transparent p-0 uppercase shadow-none placeholder:text-foreground/20 focus-visible:ring-0 lg:text-base"
                  placeholder="E-mail*"
                  type="text"
                />
                <Button type="submit">
                  <ArrowRight />
                </Button>
              </form>
            </div>
          </div>
          <div className="grid w-full max-w-xs grid-cols-2 gap-10 text-sm font-light lg:text-base">
            <div className="w-32">Aragua, 2117 Venezuela</div>
            <ul className="space-y-1">
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-1 tracking-tight text-foreground hover:text-foreground/30"
                >
                  Privacy Policy{' '}
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="group flex items-center gap-1 tracking-tight text-foreground hover:text-foreground/30"
                >
                  Terms &amp; Conditions{' '}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-20 w-full lg:mt-32">
          <h3 className="text-7xl font-bold ">FiTool</h3>
        </div>
      </div>
    </section>
  )
}
