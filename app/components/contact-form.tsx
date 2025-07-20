"use client"

import { useActionState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Loader2 } from "lucide-react"
import { submitContactForm } from "../actions/contact"
import { useAnalytics } from "../hooks/use-analytics"

export default function ContactForm() {
  const [state, action, isPending] = useActionState(submitContactForm, { success: false, message: "" })
  const { trackFormSubmission } = useAnalytics()

  // Track form submission results
  useEffect(() => {
    if (state && state.message) {
      trackFormSubmission("contact_form", state.success)
    }
  }, [state, trackFormSubmission])

  return (
    <form action={action} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo *</Label>
          <Input id="name" name="name" placeholder="Seu nome completo" required className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input id="email" name="email" type="email" placeholder="seu@email.com" required className="h-11" />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input id="phone" name="phone" placeholder="(11) 99999-9999" required className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType">Tipo de negócio</Label>
          <Select name="businessType">
            <SelectTrigger className="h-11">
              <SelectValue placeholder="Selecione seu tipo de negócio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="mei">MEI (Microempreendedor Individual)</SelectItem>
              <SelectItem value="pequena-empresa">Pequena Empresa</SelectItem>
              <SelectItem value="profissional-liberal">Profissional Liberal</SelectItem>
              <SelectItem value="startup">Startup</SelectItem>
              <SelectItem value="e-commerce">E-commerce</SelectItem>
              <SelectItem value="servicos">Prestação de Serviços</SelectItem>
              <SelectItem value="comercio">Comércio</SelectItem>
              <SelectItem value="outros">Outros</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="service">Serviço de interesse</Label>
        <Select name="service">
          <SelectTrigger className="h-11">
            <SelectValue placeholder="Qual serviço você precisa?" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="site-institucional">Site Institucional</SelectItem>
            <SelectItem value="e-commerce">Loja Virtual (E-commerce)</SelectItem>
            <SelectItem value="sistema-personalizado">Sistema Personalizado</SelectItem>
            <SelectItem value="app-mobile">Aplicativo Mobile</SelectItem>
            <SelectItem value="chatbot-whatsapp">Chatbot WhatsApp</SelectItem>
            <SelectItem value="integracao-sistemas">Integração de Sistemas</SelectItem>
            <SelectItem value="suporte-manutencao">Suporte e Manutenção</SelectItem>
            <SelectItem value="consultoria">Consultoria Tecnológica</SelectItem>
            <SelectItem value="nao-sei">Não sei ainda / Preciso de orientação</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Conte-nos sobre seu projeto</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Descreva brevemente o que você precisa, seus objetivos e qualquer informação relevante..."
          rows={4}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700 h-12"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          <>
            Solicitar Orçamento Gratuito
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {state && state.message && (
        <div
          className={`p-4 rounded-lg text-center ${
            state.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center">
        * Campos obrigatórios. Seus dados estão seguros conosco e não serão compartilhados.
      </p>
    </form>
  )
}
