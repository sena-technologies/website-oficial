"use server"

import { redirect } from "next/navigation"

export async function submitContactForm(prevState: any, formData: FormData) {
  // Verificar se formData existe
  if (!formData) {
    return {
      success: false,
      message: "Erro no envio do formulário. Tente novamente.",
    }
  }

  // Simular processamento (em produção, aqui você salvaria no banco de dados, enviaria email, etc.)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const phone = formData.get("phone") as string
  const businessType = formData.get("businessType") as string
  const service = formData.get("service") as string
  const message = formData.get("message") as string

  // Validação básica
  if (!name || !email || !phone) {
    return {
      success: false,
      message: "Por favor, preencha todos os campos obrigatórios.",
    }
  }

  // Validação de email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return {
      success: false,
      message: "Por favor, insira um email válido.",
    }
  }

  // Em produção, aqui você faria:
  // - Salvar no banco de dados
  // - Enviar email de notificação
  // - Integrar com CRM
  // - Enviar email de confirmação para o cliente

  console.log("Novo lead recebido:", {
    name,
    email,
    phone,
    businessType,
    service,
    message,
    timestamp: new Date().toISOString(),
  })

  // Redirecionar para página de agradecimento em caso de sucesso
  redirect("/obrigado?conversion=form_submission")
}
