# 📧 Guia Completo: Configuração EmailJS

## 🎯 Passos para Configurar (5 minutos)

### 1. 🔑 Obter Credenciais no EmailJS

#### A. Service ID:
1. **Dashboard EmailJS** → **Email Services**
2. **Add New Service** → Escolha **Gmail** (recomendado)
3. **Connect Account** → Autorize seu Gmail
4. **Copie o Service ID** (ex: `service_xyz123`)

#### B. Template ID:
1. **Email Templates** → **Create New Template**
2. **Nome:** `Sena Technologies - Contato`
3. **Cole este template:**

```
Subject: Novo contato de {{name}} - Sena Technologies

Olá!

Você recebeu um novo contato através do site da Sena Technologies:

👤 Nome: {{name}}
📧 Email: {{email}} 
📱 Telefone: {{phone}}
🏢 Tipo de Negócio: {{businessType}}
🛠️ Serviço de Interesse: {{service}}

💬 Mensagem:
{{message}}

📅 Data/Hora: {{timestamp}}

---
Responda este email ou entre em contato pelo telefone informado.

Atenciosamente,
Sistema Sena Technologies
```

4. **Test** → Envie um teste
5. **Save** → **Copie o Template ID** (ex: `template_abc456`)

#### C. Public Key:
1. **Account** → **General**
2. **Copie a Public Key** (ex: `aRqOWtjO9aJUF-fLZ`)

### 2. 🛠️ Atualizar o Código

No arquivo `contact-form-emailjs.tsx`, **substitua**:

```typescript
// Linha 22:
emailjs.init("SUA_PUBLIC_KEY_AQUI")

// Linhas 70-74:
const emailJSConfig = {
  serviceID: "SEU_SERVICE_ID_AQUI",     // service_xyz123
  templateID: "SEU_TEMPLATE_ID_AQUI",   // template_abc456  
  publicKey: "SUA_PUBLIC_KEY_AQUI"      // aRqOWtjO9aJUF-fLZ
}

// Linha 84:
to_email: "SEU_EMAIL_AQUI@gmail.com"   // Email onde quer receber
```

### 3. ✅ Exemplo Prático

Se suas credenciais forem:
- **Service ID:** `service_gmail123`
- **Template ID:** `template_contato456`  
- **Public Key:** `aRqOWtjO9aJUF-fLZ`
- **Email:** `contato@senatechnologies.com`

**Substitua assim:**

```typescript
// Linha 22:
emailjs.init("aRqOWtjO9aJUF-fLZ")

// Linhas 70-74:
const emailJSConfig = {
  serviceID: "service_gmail123",
  templateID: "template_contato456",
  publicKey: "aRqOWtjO9aJUF-fLZ"
}

// Linha 84:
to_email: "contato@senatechnologies.com"
```

### 4. 🧪 Testar

1. **Salve os arquivos**
2. **Acesse:** http://localhost:3001
3. **Preencha o formulário** na seção contato
4. **Envie** → Deve chegar email na sua caixa de entrada

### 5. 📊 Monitoramento

**Console do navegador (F12):**
```
📋 NOVO LEAD RECEBIDO:
==================================================
👤 Nome: João Silva
📧 Email: joao@exemplo.com
📱 Telefone: (11) 99999-9999
...
==================================================
📤 Enviando via EmailJS...
✅ Email enviado com sucesso!
```

**EmailJS Dashboard:**
- Ver estatísticas de envios
- Logs de emails
- Rate limits

### 6. 🚨 Troubleshooting

#### Erro: "Public key required"
- Verificar se Public Key está correta
- Reinicializar EmailJS

#### Erro: "Template not found"  
- Verificar Template ID
- Template deve estar Published

#### Erro: "Service not found"
- Verificar Service ID
- Service deve estar conectado

#### Emails não chegam:
- Verificar spam/lixo eletrônico
- Testar com outro email
- Verificar template variables

### 7. 🎯 Resultado Final

✅ **Formulário funcionando 100%**
✅ **Emails automáticos**  
✅ **Logs para backup**
✅ **UX profissional**

---

💡 **Dica:** Depois de configurar, você pode remover os `console.log` se quiser limpar o código.

🆘 **Ajuda:** Se tiver dúvidas, me mande suas credenciais que eu configuro pra você!
