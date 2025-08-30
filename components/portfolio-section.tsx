"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Monitor, ShoppingCart, Users, BarChart, MessageSquare, Calendar, CheckSquare, CreditCard } from "lucide-react"
import { useState, useEffect } from "react"

interface Project {
  id: string
  title: string
  description: string
  category: string
  technologies: string[]
  features: string[]
  icon: React.ReactNode
  gradient: string
  demoUrl?: string
  codeUrl?: string
}

const projects: Project[] = [
  {
    id: "restaurante-gourmet",
    title: "Landing Page - Restaurante Gourmet",
    description: "Landing page moderna com cardápio digital e sistema de reservas via WhatsApp",
    category: "Sites Institucionais & Landing Pages",
    technologies: ["Next.js", "TailwindCSS", "Vercel"],
    features: [
      "Cardápio digital interativo",
      "Reservas via WhatsApp",
      "Localização Google Maps",
      "SEO otimizado"
    ],
    icon: <Monitor className="h-6 w-6" />,
    gradient: "from-orange-500 to-red-600"
  },
  {
    id: "advocacia-silva",
    title: "Site Institucional - Silva & Associados",
    description: "Site institucional moderno para escritório de advocacia com blog jurídico",
    category: "Sites Institucionais & Landing Pages",
    technologies: ["Next.js", "React Router", "TailwindCSS"],
    features: [
      "Páginas de serviços",
      "Perfil da equipe",
      "Blog jurídico",
      "Formulário de contato"
    ],
    icon: <Users className="h-6 w-6" />,
    gradient: "from-blue-600 to-indigo-700"
  },
  {
    id: "curso-beleza",
    title: "Landing Page - Curso Beleza em Casa",
    description: "Landing page de alta conversão para lançamento de curso online",
    category: "Sites Institucionais & Landing Pages",
    technologies: ["Next.js", "TailwindCSS", "Framer Motion"],
    features: [
      "Seção de benefícios",
      "Depoimentos de alunos",
      "Captura de e-mail",
      "Contador regressivo"
    ],
    icon: <Monitor className="h-6 w-6" />,
    gradient: "from-pink-500 to-purple-600"
  },
  {
    id: "agenda-facil",
    title: "Agenda Fácil - Sistema de Agendamento",
    description: "Sistema completo para agendamento em barbearias e clínicas",
    category: "Sistemas e Aplicações Web",
    technologies: ["Next.js", "Supabase", "Firebase"],
    features: [
      "Cadastro de clientes",
      "Agenda de horários",
      "Confirmação automática",
      "Painel administrativo"
    ],
    icon: <Calendar className="h-6 w-6" />,
    gradient: "from-green-500 to-emerald-600"
  },
  {
    id: "sales-dashboard",
    title: "Sales Dashboard - Gestão de Vendas",
    description: "Painel profissional para gestão de vendas com relatórios e gráficos",
    category: "Sistemas e Aplicações Web",
    technologies: ["Next.js", "Recharts", "Node.js", "Express"],
    features: [
      "Cadastro de produtos",
      "Relatórios em gráfico",
      "Exportação CSV",
      "Design SaaS profissional"
    ],
    icon: <BarChart className="h-6 w-6" />,
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    id: "todoapp-pro",
    title: "ToDoApp Pro - Lista de Tarefas",
    description: "Aplicativo moderno de lista de tarefas com interface intuitiva",
    category: "Sistemas e Aplicações Web",
    technologies: ["React.js", "TailwindCSS", "Firebase"],
    features: [
      "Criar e editar tarefas",
      "Filtro por status",
      "Animações suaves",
      "Interface intuitiva"
    ],
    icon: <CheckSquare className="h-6 w-6" />,
    gradient: "from-violet-500 to-purple-600"
  },
  {
    id: "elegance-gems",
    title: "Elegance Gems 💎 - Loja de Semijoias",
    description: "E-commerce moderno para loja de semijoias com carrinho e checkout",
    category: "E-commerce & Soluções Digitais",
    technologies: ["Next.js", "Stripe", "TailwindCSS"],
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Checkout integrado",
      "Cupons de desconto"
    ],
    icon: <ShoppingCart className="h-6 w-6" />,
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "servicos-ja",
    title: "Serviços Já - Marketplace Local",
    description: "Marketplace para conectar prestadores de serviços e clientes",
    category: "E-commerce & Soluções Digitais",
    technologies: ["Next.js", "Node.js", "Prisma", "PostgreSQL"],
    features: [
      "Cadastro de prestadores",
      "Busca por categoria",
      "Sistema de avaliações",
      "Arquitetura escalável"
    ],
    icon: <Users className="h-6 w-6" />,
    gradient: "from-teal-500 to-cyan-600"
  },
  {
    id: "smartbot",
    title: "SmartBot - Chatbot de Atendimento",
    description: "Chatbot inteligente para atendimento automatizado",
    category: "E-commerce & Soluções Digitais",
    technologies: ["Next.js", "OpenAI API", "TailwindCSS"],
    features: [
      "Respostas inteligentes",
      "Chat em tempo real",
      "FAQ dinâmico",
      "Interface WhatsApp-like"
    ],
    icon: <MessageSquare className="h-6 w-6" />,
    gradient: "from-emerald-500 to-green-600"
  },
  {
    id: "fincontrol",
    title: "FinControl - Gestão Financeira",
    description: "Sistema de controle financeiro pessoal com relatórios e metas",
    category: "E-commerce & Soluções Digitais",
    technologies: ["Next.js", "Firebase", "Chart.js"],
    features: [
      "Receitas e despesas",
      "Relatórios mensais",
      "Definição de metas",
      "Design fintech moderno"
    ],
    icon: <CreditCard className="h-6 w-6" />,
    gradient: "from-blue-500 to-indigo-600"
  }
]

const categories = [
  "Todos",
  "Sites Institucionais & Landing Pages", 
  "Sistemas e Aplicações Web",
  "E-commerce & Soluções Digitais"
]

export default function PortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("")
const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
  setSelectedCategory("Todos")
}, [])

if (!mounted) {
  return null // Evita hidratação inconsistente
}
  
  const filteredProjects = selectedCategory === "Todos" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-slate-50 to-cyan-50">
      <div className="container px-4 md:px-6">
        <div className="text-center space-y-4 mb-16">
          <Badge className="bg-cyan-100 text-cyan-700">
            🌟 Nosso Portfólio
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold">
            Projetos que Transformam Negócios
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Confira alguns projetos desenvolvidos pela Sena Technologies, que mostram nossa capacidade de entregar 
            soluções digitais modernas, funcionais e de alto impacto para nossos clientes.
          </p>
        </div>

        {/* Filtro de Categorias */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`${selectedCategory === category 
                ? "bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700 text-white" 
                : "hover:bg-cyan-50"
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Categorias */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto">
              <Monitor className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Sites Institucionais & Landing Pages</h3>
            <p className="text-muted-foreground">
              Landing pages de alta conversão e sites institucionais modernos
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto">
              <BarChart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Sistemas e Aplicações Web</h3>
            <p className="text-muted-foreground">
              Sistemas completos de gestão e aplicações web personalizadas
            </p>
          </div>
          
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto">
              <ShoppingCart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">E-commerce & Soluções Digitais</h3>
            <p className="text-muted-foreground">
              Lojas virtuais, marketplaces e soluções digitais inovadoras
            </p>
          </div>
        </div>

        {/* Grid de Projetos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center text-white`}>
                    {project.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {project.description}
                </CardDescription>
                
                {/* Tecnologias */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {/* Features */}
                <div className="space-y-2">
                  <p className="text-sm font-medium text-muted-foreground">
                    Principais funcionalidades:
                  </p>
                  <ul className="text-sm space-y-1">
                    {project.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Botões */}
                <div className="flex space-x-2 pt-4">
                  <Button 
                    size="sm" 
                    className={`flex-1 bg-gradient-to-r ${project.gradient} hover:opacity-90`}
                    onClick={() => window.open(`#portfolio-${project.id}`, '_blank')}
                  >
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1"
                    onClick={() => window.open(`https://github.com/sena-technologies/${project.id}`, '_blank')}
                  >
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">
              Pronto para criar seu próximo projeto?
            </h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Entre em contato conosco e vamos desenvolver uma solução digital 
              personalizada para o seu negócio, assim como fizemos com estes projetos.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700"
              onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Solicitar Orçamento
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => window.open('https://github.com/sena-technologies', '_blank')}
            >
              Ver Mais Projetos
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
