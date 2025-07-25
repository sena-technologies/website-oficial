"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(prevState: any, formData: FormData) {
  console.log("🚀 Iniciando submitContactForm...")
  
  // Verificar se formData existe
  if (!formData) {
    console.log("❌ FormData não existe")
    return {
      success: false,
      message: "Erro no envio do formulário. Tente novamente.",
    }
  }

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const businessType = formData.get("businessType") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  console.log("📋 Dados recebidos:", { name, email, phone, businessType, service })

  // Validação básica
  if (!name || !email || !phone) {
    console.log("❌ Campos obrigatórios não preenchidos")
    return {
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios.",
    }
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    console.log("❌ Email inválido:", email)
    return {
      success: false,
      message: "Por favor, insira um email válido.",
    }
  }

  console.log("✅ Validações passaram, tentando enviar para Formspree...")

  try {
    // Enviar dados para Formspree
    const formspreeEndpoint = "https://formspree.io/f/manboqwz"
    
    // Preparar dados em formato JSON (mais confiável que FormData)
    const formDataToSend = {
      name: name,
      email: email,
      phone: phone,
      businessType: businessType || "Não informado",
      service: service || "Não informado", 
      message: message || "Não informado",
      _subject: `Novo contato de ${name} - Sena Technologies`,
      _replyto: email,
    }

    console.log("📤 Enviando dados para Formspree:", formDataToSend)
    
    const response = await fetch(formspreeEndpoint, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formDataToSend)
    })

    console.log("📥 Resposta do Formspree:", response.status, response.statusText)

    if (response.ok) {
      const responseData = await response.json()
      console.log("✅ Lead enviado com sucesso para Formspree:", responseData)

      // Log local para backup
      console.log("📋 NOVO LEAD RECEBIDO:")
      console.log("=" .repeat(50))
      console.log(`👤 Nome: ${name}`)
      console.log(`📧 Email: ${email}`)
      console.log(`📱 Telefone: ${phone}`)
      console.log(`🏢 Tipo de Negócio: ${businessType || "Não informado"}`)
      console.log(`🛠️ Serviço: ${service || "Não informado"}`)
      console.log(`💬 Mensagem: ${message || "Não informado"}`)
      console.log(`⏰ Data/Hora: ${new Date().toISOString()}`)
      console.log("=" .repeat(50))

      // Redirecionar para página de agradecimento
      redirect("/obrigado?conversion=form_submission")
    } else {
      const errorData = await response.text()
      console.error("❌ Erro no Formspree:", response.status, errorData)
      
      // Fallback: mesmo com erro no Formspree, vamos processar localmente
      console.log("📋 PROCESSANDO LOCALMENTE (Formspree falhou):")
      console.log("=" .repeat(50))
      console.log(`👤 Nome: ${name}`)
      console.log(`📧 Email: ${email}`)
      console.log(`📱 Telefone: ${phone}`)
      console.log(`🏢 Tipo de Negócio: ${businessType || "Não informado"}`)
      console.log(`🛠️ Serviço: ${service || "Não informado"}`)
      console.log(`💬 Mensagem: ${message || "Não informado"}`)
      console.log(`⏰ Data/Hora: ${new Date().toISOString()}`)
      console.log("=" .repeat(50))
      
      // Ainda redirecionar para sucesso (dados foram logados)
      redirect("/obrigado?conversion=form_submission&source=local")
    }
  } catch (error) {
    console.error("❌ Erro ao enviar formulário:", error)
    
    // Log detalhado para debug
    console.error("Detalhes do erro:", {
      message: error instanceof Error ? error.message : 'Erro desconhecido',
      stack: error instanceof Error ? error.stack : undefined,
      formData: { name, email, phone, businessType, service }
    })
    
    // Fallback: processar localmente mesmo com erro
    console.log("📋 PROCESSANDO LOCALMENTE (Erro na requisição):")
    console.log("=" .repeat(50))
    console.log(`👤 Nome: ${name}`)
    console.log(`📧 Email: ${email}`)
    console.log(`📱 Telefone: ${phone}`)
    console.log(`🏢 Tipo de Negócio: ${businessType || "Não informado"}`)
    console.log(`🛠️ Serviço: ${service || "Não informado"}`)
    console.log(`💬 Mensagem: ${message || "Não informado"}`)
    console.log(`⏰ Data/Hora: ${new Date().toISOString()}`)
    console.log("=" .repeat(50))
    
    // Redirecionar para sucesso (dados foram logados)
    redirect("/obrigado?conversion=form_submission&source=local&error=network")
  }
}
