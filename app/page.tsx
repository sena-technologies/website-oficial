import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import PortfolioSection from "@/components/portfolio-section";
import {
  ArrowRight,
  CheckCircle,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Target,
  Eye,
  Heart,
  Instagram,
  Facebook,
  Linkedin,
  Github,
  MapPin,
  Building2,
  Mountain,
  MessageCircle,
  Mail,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import ContactFormNew from "@/app/components/contact-form-new";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md" role="banner">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center space-x-2">
            <Image
              src="/logo_sem_fundo.webp"
              alt="Sena Technologies - Desenvolvimento Web e Aplicativos Mobile em São Paulo"
              width={250}
              height={60}
              className="h-16 w-auto"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center space-x-6" role="navigation" aria-label="Menu principal">
            <Link
              href="#sobre"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
              aria-label="Ir para seção Sobre Nós"
            >
              Sobre
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              Serviços
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              Portfólio
            </Link>
            <Link
              href="#valores"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              Valores
            </Link>
            <Link
              href="#contato"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              Contato
            </Link>
          </nav>

          <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700">
            <Link
              href="#contato"
              className="text-sm font-medium hover:text-cyan-600 transition-colors"
            >
              Fale Conosco
            </Link>
          </Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-600/10" />
          <div className="container relative px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-200">
                    🏭 Joinville-SC | Transformação Digital
                  </Badge>
                  <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                    Soluções que movem o{" "}
                    <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                      seu negócio
                    </span>{" "}
                    para o próximo nível
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    Especialistas em levar pequenas empresas, MEIs e
                    profissionais liberais para o mundo digital com soluções
                    acessíveis e eficazes.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Link
                      href="#contato"
                      className="text-sm font-medium hover:text-cyan-600 transition-colors"
                    >
                      Iniciar Projeto
                    </Link>

                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline">
                    <Link
                      href="#servicos"
                      className="text-sm font-medium hover:text-cyan-600 transition-colors"
                    >
                      Conhecer Serviços
                    </Link>
                  </Button>
                </div>

                <div className="flex items-center space-x-8 pt-8">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">50+</div>
                    <div className="text-sm text-muted-foreground">
                      Projetos
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">95%</div>
                    <div className="text-sm text-muted-foreground">
                      Satisfação
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Suporte</div>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-3xl" />
                
                {/* Grid de showcases de projetos */}
                <div className="relative grid grid-cols-2 gap-4 p-6 bg-white rounded-2xl shadow-2xl">
                  {/* Dashboard mockup */}
                  <div className="relative h-32 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-lg p-4 border">
                    <div className="flex items-center space-x-2 mb-3">
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-cyan-200 rounded w-3/4"></div>
                      <div className="h-2 bg-blue-200 rounded w-1/2"></div>
                      <div className="flex space-x-2">
                        <div className="h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded w-1/3"></div>
                        <div className="h-8 bg-gray-200 rounded w-1/4"></div>
                      </div>
                    </div>
                  </div>

                  {/* Mobile app mockup */}
                  <div className="relative h-32 bg-gradient-to-br from-slate-900 to-slate-700 rounded-lg p-3 flex flex-col">
                    <div className="bg-gray-600 h-1 w-1/3 rounded mx-auto mb-2"></div>
                    <div className="flex-1 bg-white rounded-md p-2">
                      <div className="space-y-1">
                        <div className="h-1.5 bg-cyan-300 rounded w-full"></div>
                        <div className="h-1.5 bg-blue-300 rounded w-2/3"></div>
                        <div className="mt-2 grid grid-cols-2 gap-1">
                          <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500 rounded"></div>
                          <div className="h-3 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* E-commerce mockup */}
                  <div className="relative h-32 bg-white rounded-lg p-3 border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="h-2 bg-cyan-500 rounded w-1/4"></div>
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-300 rounded"></div>
                        <div className="w-2 h-2 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-2 h-16">
                      <div className="bg-gray-100 rounded p-1">
                        <div className="h-8 bg-gradient-to-br from-cyan-200 to-blue-200 rounded mb-1"></div>
                        <div className="h-1 bg-gray-300 rounded w-3/4"></div>
                      </div>
                      <div className="bg-gray-100 rounded p-1">
                        <div className="h-8 bg-gradient-to-br from-blue-200 to-purple-200 rounded mb-1"></div>
                        <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics/Growth chart */}
                  <div className="relative h-32 bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-3 border">
                    <div className="flex items-end justify-between h-full space-x-1">
                      <div className="bg-gradient-to-t from-cyan-500 to-cyan-400 rounded-sm w-3" style={{height: '40%'}}></div>
                      <div className="bg-gradient-to-t from-blue-500 to-blue-400 rounded-sm w-3" style={{height: '60%'}}></div>
                      <div className="bg-gradient-to-t from-cyan-600 to-cyan-500 rounded-sm w-3" style={{height: '80%'}}></div>
                      <div className="bg-gradient-to-t from-blue-600 to-blue-500 rounded-sm w-3" style={{height: '90%'}}></div>
                      <div className="bg-gradient-to-t from-cyan-700 to-cyan-600 rounded-sm w-3" style={{height: '100%'}}></div>
                    </div>
                    <div className="absolute top-2 right-2">
                      <div className="text-xs font-bold text-green-600">📈 +300%</div>
                    </div>
                  </div>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-4 -left-4 bg-white rounded-full p-3 shadow-lg border-4 border-cyan-100">
                  <Code className="h-6 w-6 text-cyan-600" />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-3 shadow-lg border-4 border-blue-100">
                  <Smartphone className="h-6 w-6 text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Sobre Section */}
        <section id="sobre" className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-cyan-100 text-cyan-700">Sobre Nós</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Quem é a Sena Technologies
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Somos uma empresa de tecnologia focada em entregar soluções
                inovadoras e de alta qualidade para empresas que buscam se
                destacar no mercado digital.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Missão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Desenvolver soluções tecnológicas inovadoras que transformem
                    negócios e criem valor real para nossos clientes, sempre com
                    excelência e comprometimento.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Eye className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Visão</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Ser reconhecida como referência em soluções tecnológicas
                    inovadoras, contribuindo para a transformação digital das
                    empresas brasileiras.
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Valores</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    Inovação, qualidade, transparência, comprometimento e foco
                    no cliente são os pilares que guiam todas as nossas decisões
                    e ações.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Localização Section */}
        <section id="localizacao" className="py-20 bg-gradient-to-br from-blue-50 to-cyan-50">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-cyan-100 text-cyan-700">
                📍 Nossa Localização
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Atendemos Joinville-SC e Região
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Baseados em Joinville, cidade polo industrial de Santa Catarina, 
                atendemos toda a região com proximidade e qualidade.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Joinville - Principal */}
              <Card className="border-2 border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Building2 className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Joinville-SC</CardTitle>
                  <CardDescription>Nossa base principal</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Atendimento presencial e suporte especializado para empresas em Joinville, maior polo industrial de Santa Catarina.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Reuniões presenciais
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Suporte local
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Vale do Itajaí */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mountain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Vale do Itajaí</CardTitle>
                  <CardDescription>Blumenau, Pomerode e Timbó</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Atendimento ágil e próximo para toda a região do Vale do Itajaí, com foco em qualidade e proximidade.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Deslocamento rápido
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Conhecimento local
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Santa Catarina */}
              <Card className="bg-gradient-to-br from-slate-50 to-blue-100 hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-slate-600 to-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">Santa Catarina</CardTitle>
                  <CardDescription>Florianópolis, Itajaí, São Bento e demais cidades</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Expansão de atendimento para todo o estado catarinense, com flexibilidade e eficiência.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Atendimento remoto
                    </div>
                    <div className="flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Visitas planejadas
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-muted-foreground mb-6">
                Quer saber se atendemos sua região? Entre em contato conosco!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-emerald-700 hover:to-green-700"
                >
                  <Link
                    href="https://wa.me/5547999999999?text=Olá,%20gostaria%20de%20saber%20se%20vocês%20atendem%20minha%20cidade."
                    target="_blank"
                    className="text-sm font-medium transition-colors flex items-center"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    WhatsApp
                  </Link>
                </Button>
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Link
                    href="#contato"
                    className="text-sm font-medium transition-colors flex items-center"
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contato
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section
          id="servicos"
          className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-cyan-100 text-cyan-700">
                Nossos Serviços
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                Soluções Completas em Tecnologia
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Oferecemos um portfólio completo de serviços para atender todas
                as necessidades tecnológicas do seu negócio.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Globe className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Desenvolvimento Web</CardTitle>
                  <CardDescription>
                    Sites profissionais e lojas virtuais que convertem
                    visitantes em clientes.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Sites institucionais
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      E-commerce completo
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Landing pages
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Sistemas Personalizados</CardTitle>
                  <CardDescription>
                    Sistemas sob medida para automatizar e otimizar seus
                    processos de negócio.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Gestão empresarial
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Controle de estoque
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automação de processos
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Smartphone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Apps Mobile</CardTitle>
                  <CardDescription>
                    Aplicativos móveis para aproximar você dos seus clientes
                    onde eles estão.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Apps nativos iOS/Android
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Apps híbridos
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Progressive Web Apps
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Suporte & Manutenção</CardTitle>
                  <CardDescription>
                    Suporte técnico dedicado para manter seus sistemas sempre
                    funcionando perfeitamente.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Suporte técnico
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Manutenção preventiva
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Backup e segurança
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle>Bots & Integrações</CardTitle>
                  <CardDescription>
                    Automatize atendimento e integre sistemas para otimizar sua
                    operação.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Chatbots WhatsApp
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Integração de APIs
                    </li>
                    <li className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                      Automação de vendas
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Depoimentos Section */}
        <section className="py-20 bg-white">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-16">
              <Badge className="bg-cyan-100 text-cyan-700">Depoimentos</Badge>
              <h2 className="text-3xl md:text-4xl font-bold">
                O que nossos clientes dizem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Veja como a Sena Technologies transformou negócios e impulsionou
                o crescimento de nossos clientes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Maria Silva"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Maria Silva</h4>
                      <p className="text-sm text-muted-foreground">
                        Consultora de Beleza - MEI
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Depois do site que a Sena fez para mim, minhas vendas
                    aumentaram 300%! Agora recebo clientes de toda a cidade
                    através do Google. Investimento que se pagou em 2 meses!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="João Santos"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">João Santos</h4>
                      <p className="text-sm text-muted-foreground">
                        Dono - Padaria do João
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "O sistema de pedidos online revolucionou minha padaria!
                    Agora os clientes fazem pedidos pelo WhatsApp
                    automaticamente. Economizo 4 horas por dia e vendo 50%
                    mais."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Dra. Ana Costa"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Dra. Ana Costa</h4>
                      <p className="text-sm text-muted-foreground">
                        Advogada Autônoma
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Meu escritório ganhou credibilidade com o site
                    profissional. Captei 15 novos clientes só no primeiro mês! O
                    investimento se pagou rapidamente."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Carlos Oliveira"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Carlos Oliveira</h4>
                      <p className="text-sm text-muted-foreground">
                        Dono - Loja de Roupas
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "O e-commerce que desenvolveram triplicou minhas vendas!
                    Agora vendo para o Brasil todo. A equipe da Sena é muito
                    profissional e sempre disponível."
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Dra. Fernanda Lima"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Dra. Fernanda Lima</h4>
                      <p className="text-sm text-muted-foreground">Dentista</p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "O sistema de agendamento online mudou minha clínica! Reduzi
                    faltas em 80% e minha agenda está sempre lotada. Recomendo a
                    Sena para todos os colegas!"
                  </p>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-4 mb-4">
                    <Image
                      src="/placeholder.svg?height=60&width=60"
                      alt="Roberto Ferreira"
                      width={60}
                      height={60}
                      className="rounded-full"
                    />
                    <div>
                      <h4 className="font-semibold">Roberto Ferreira</h4>
                      <p className="text-sm text-muted-foreground">
                        Mecânico Autônomo
                      </p>
                    </div>
                  </div>
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>
                  <p className="text-muted-foreground">
                    "Nunca pensei que precisava de um site, mas a Sena me
                    mostrou como isso mudaria meu negócio. Hoje recebo 10
                    clientes novos por semana só pelo Google!"
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Estatísticas de Sucesso */}
            <div className="mt-16 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-2xl p-8">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    95%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Clientes Satisfeitos
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    45%
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Aumento Médio de Vendas
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    30 dias
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Tempo Médio de Entrega
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-cyan-600 mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Suporte Disponível
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section
          id="contato"
          className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
        >
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center space-y-4 mb-12">
                <Badge className="bg-cyan-100 text-cyan-700">
                  Fale Conosco
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold">
                  Pronto para transformar seu negócio?
                </h2>
                <p className="text-xl text-muted-foreground">
                  Preencha o formulário abaixo e receba uma proposta
                  personalizada em até 2 horas úteis.
                </p>
              </div>

              <div className="grid lg:grid-cols-2 gap-12 items-start">
                {/* Formulário */}
                <Card className="border-0 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-2xl">
                      Solicite seu orçamento gratuito
                    </CardTitle>
                    <CardDescription>
                      Conte-nos sobre seu projeto e receba uma proposta
                      personalizada
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ContactFormNew />
                  </CardContent>
                </Card>

                {/* Informações de Contato */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-bold mb-6">
                      Entre em contato conosco
                    </h3>
                    <div className="space-y-6">
                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Globe className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Email</h4>
                          <p className="text-muted-foreground">
                            contato@senatechnologies.com
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Smartphone className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">Telefone</h4>
                          <p className="text-muted-foreground">
                            (11) 9999-9999
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
                          <Users className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <h4 className="font-semibold">WhatsApp</h4>
                          <p className="text-muted-foreground">
                            (11) 9999-9999
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-6 text-white">
                    <h4 className="font-bold text-lg mb-4">
                      Por que escolher a Sena Technologies?
                    </h4>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Orçamento gratuito e sem compromisso</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Especialistas em pequenas empresas</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Suporte técnico dedicado</span>
                      </li>
                      <li className="flex items-center">
                        <CheckCircle className="h-5 w-5 mr-3 flex-shrink-0" />
                        <span>Resultados comprovados</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <h4 className="font-bold text-lg mb-4 text-center">
                      Nossos Números
                    </h4>
                    <div className="grid grid-cols-2 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">
                          95%
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Satisfação
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">
                          2h
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Resposta
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">
                          50+
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Projetos
                        </div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-600">
                          24/7
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Suporte
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-white py-12" style={{ backgroundColor: '#00162D' }}>
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Image
                  src="/Frame-3.webp"
                  alt="Sena Technologies"
                  width={250}
                  height={60}
                  className="h-16 w-auto"
                />
              </div>
              <p className="text-gray-400">
                Transformando ideias em soluções digitais inovadoras.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Desenvolvimento Web
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Apps Mobile
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Sistemas
                  </Link>
                </li>
                <li>
                  <Link
                    href="#servicos"
                    className="hover:text-white transition-colors"
                  >
                    Consultoria
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Empresa</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    href="#sobre"
                    className="hover:text-white transition-colors"
                  >
                    Sobre
                  </Link>
                </li>
                <li>
                  <Link
                    href="#valores"
                    className="hover:text-white transition-colors"
                  >
                    Valores
                  </Link>
                </li>
                <li>
                  <Link
                    href="#carreira"
                    className="hover:text-white transition-colors"
                  >
                    Carreira
                  </Link>
                </li>
                <li>
                  <Link
                    href="#blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <ul className="space-y-2 text-gray-400">
                <li>contato@senatechnologies.com</li>
                <li>(11) 9999-9999</li>
                <li>Joinville, SC</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Sena Technologies. Todos os
                direitos reservados.
              </p>

              {/* Redes Sociais */}
              <div className="flex space-x-3">
                <Link
                  href="https://instagram.com/senatechnologies"
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://facebook.com/senatechnologies"
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://linkedin.com/company/senatechnologies"
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-4 w-4 text-white" />
                </Link>
                <Link
                  href="https://github.com/senatechnologies"
                  className="h-8 w-8 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center hover:from-blue-600 hover:to-purple-700 transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4 text-white" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
