"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowRight, Loader2, CheckCircle, AlertCircle } from "lucide-react"
import emailjs from '@emailjs/browser'

export default function ContactFormNew() {
  const [isLoading, setIsLoading] = useState(false)
  const [result, setResult] = useState<{success: boolean, message: string} | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    businessType: "",
    service: "",
    message: ""
  })

  useEffect(() => {
    // Inicializar EmailJS com sua Public Key
    emailjs.init({
      publicKey: "MrFyLf9oJFZpd8POU",
      limitRate: {
        // Opcional: limitar tentativas de envio
        throttle: 2000, // 2s entre envios
      },
    })
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setResult(null)

    // Validação básica
    if (!formData.name || !formData.email || !formData.phone) {
      setResult({
        success: false,
        message: "Por favor, preencha todos os campos obrigatórios."
      })
      setIsLoading(false)
      return
    }

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setResult({
        success: false,
        message: "Por favor, insira um email válido."
      })
      setIsLoading(false)
      return
    }

    try {
      // Log local primeiro (sempre funciona)
      console.log("📋 NOVO LEAD RECEBIDO:")
      console.log("=" .repeat(50))
      console.log(`👤 Nome: ${formData.name}`)
      console.log(`📧 Email: ${formData.email}`)
      console.log(`📱 Telefone: ${formData.phone}`)
      console.log(`🏢 Tipo de Negócio: ${formData.businessType || "Não informado"}`)
      console.log(`🛠️ Serviço: ${formData.service || "Não informado"}`)
      console.log(`💬 Mensagem: ${formData.message || "Não informado"}`)
      console.log(`⏰ Data/Hora: ${new Date().toISOString()}`)
      console.log("=" .repeat(50))

      // Preparar dados para envio via EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        business_type: formData.businessType || "Não informado",
        service_type: formData.service || "Não informado",
        message: formData.message || "Não informado",
        timestamp: new Date().toLocaleString('pt-BR'),
        to_email: "senatechnologies21@gmail.com"
      }

      console.log("📤 Enviando via EmailJS...", templateParams)

      // Enviar email via EmailJS
      const emailResult = await emailjs.send(
        "service_upq3tvj",  // Service ID
        "template_20kne38", // Template ID
        templateParams
      )

      console.log("✅ Email enviado com sucesso!", emailResult)

      // Enviar dados para HubSpot CRM
      try {
        console.log("📤 Enviando para HubSpot CRM...")
        
        const crmResponse = await fetch('/api/crm', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            company: formData.businessType,
            service: formData.service,
            message: formData.message
          })
        })

        const crmResult = await crmResponse.json()
        
        if (crmResult.success) {
          console.log("✅ Contato adicionado ao HubSpot CRM!")
        } else {
          console.warn("⚠️ Falha no CRM (mas email foi enviado):", crmResult.error)
        }
        
      } catch (crmError) {
        console.warn("⚠️ Erro no CRM (mas email foi enviado):", crmError)
      }

      setResult({
        success: true,
        message: "Mensagem enviada com sucesso! Entraremos em contato em até 2 horas."
      })

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        businessType: "",
        service: "",
        message: ""
      })

    } catch (error: any) {
      console.error("❌ Erro ao enviar via EmailJS:", {
        error,
        name: error?.name,
        message: error?.message,
        stack: error?.stack,
        details: JSON.stringify(error)
      })
      
      setResult({
        success: false,
        message: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp."
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nome completo *</Label>
          <Input 
            id="name" 
            value={formData.name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            placeholder="Seu nome completo" 
            required 
            className="h-11" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email *</Label>
          <Input 
            id="email" 
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            placeholder="seu@email.com" 
            required 
            className="h-11" 
          />
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Telefone/WhatsApp *</Label>
          <Input 
            id="phone" 
            value={formData.phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            placeholder="(11) 99999-9999" 
            required 
            className="h-11" 
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="businessType">Tipo de negócio</Label>
          <Select value={formData.businessType} onValueChange={(value) => handleInputChange("businessType", value)}>
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
        <Select value={formData.service} onValueChange={(value) => handleInputChange("service", value)}>
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
          value={formData.message}
          onChange={(e) => handleInputChange("message", e.target.value)}
          placeholder="Descreva brevemente o que você precisa, seus objetivos e qualquer informação relevante..."
          rows={4}
          className="resize-none"
        />
      </div>

      <Button
        type="submit"
        disabled={isLoading}
        className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-blue-700 hover:to-purple-700 h-12"
      >
        {isLoading ? (
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

      {result && (
        <div
          className={`p-4 rounded-lg flex items-center gap-3 ${
            result.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {result.success ? (
            <CheckCircle className="h-5 w-5 flex-shrink-0" />
          ) : (
            <AlertCircle className="h-5 w-5 flex-shrink-0" />
          )}
          <span>{result.message}</span>
        </div>
      )}

      <p className="text-sm text-muted-foreground text-center">
        * Campos obrigatórios. Seus dados estão seguros conosco e não serão compartilhados.
      </p>
    </form>
  )
}
