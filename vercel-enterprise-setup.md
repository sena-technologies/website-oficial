# 🚀 Vercel Enterprise Setup - Sena Technologies

## 📋 Checklist para Configuração da Conta Vercel

### 1. **Criar Conta Vercel Empresarial**
- [ ] Acessar [vercel.com](https://vercel.com)
- [ ] Criar conta com email: `contato@senatechnologies.com.br`
- [ ] Username sugerido: `sena-technologies`
- [ ] Conectar com GitHub Enterprise: `sena-technologies`

### 2. **Configurações Iniciais**
- [ ] Configurar perfil da empresa
- [ ] Adicionar logo da Sena Technologies
- [ ] Configurar informações de contato
- [ ] Ativar autenticação 2FA

### 3. **Configuração de Domínio**
- [ ] Adicionar domínio: `senatechnologies.com.br`
- [ ] Configurar DNS (A/CNAME records)
- [ ] Ativar SSL automático
- [ ] Verificar propagação DNS

### 4. **Integração GitHub**
- [ ] Conectar conta GitHub `sena-technologies`
- [ ] Configurar permissões de repositório
- [ ] Ativar deploy automático
- [ ] Configurar branch de produção (main)

---

## 🌐 **Configuração DNS Recomendada**

### **Registros DNS para senatechnologies.com.br:**
```
Tipo    Nome    Valor                      TTL
A       @       76.76.19.61               3600
CNAME   www     cname.vercel-dns.com      3600
```

### **Subdomínios para Projetos Demo:**
```
CNAME   restaurante     cname.vercel-dns.com
CNAME   advocacia       cname.vercel-dns.com
CNAME   agenda          cname.vercel-dns.com
CNAME   loja            cname.vercel-dns.com
```

---

## 📊 **Estrutura de Projetos Vercel**

### **Projeto Principal:**
- **Nome:** `website-oficial`
- **Repositório:** `sena-technologies/website-oficial`
- **Domínio:** `senatechnologies.com.br`
- **Branch:** `main`

### **Projetos Portfolio:**
| Projeto | Repositório | Domínio | Status |
|---------|-------------|---------|--------|
| Website Oficial | `website-oficial` | `senatechnologies.com.br` | 🚧 Migração |
| Restaurante Gourmet | `restaurante-gourmet` | `restaurante.senatechnologies.com.br` | 📋 Planejado |
| Silva & Associados | `advocacia-silva` | `advocacia.senatechnologies.com.br` | 📋 Planejado |
| Agenda Fácil | `agenda-facil` | `agenda.senatechnologies.com.br` | 📋 Planejado |

---

## ⚙️ **Configurações de Deploy**

### **Variáveis de Ambiente:**
```bash
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://senatechnologies.com.br
NEXT_PUBLIC_COMPANY_NAME=Sena Technologies
NEXT_PUBLIC_LOCATION=Joinville-SC
```

### **Build Settings:**
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "outputDirectory": ".next",
  "installCommand": "npm install",
  "devCommand": "npm run dev"
}
```

---

## 🔧 **Otimizações Vercel**

### **Performance:**
- [ ] Ativar Edge Functions
- [ ] Configurar ISR (Incremental Static Regeneration)
- [ ] Otimizar imagens com next/image
- [ ] Configurar caching headers

### **Analytics:**
- [ ] Ativar Vercel Analytics
- [ ] Configurar Web Vitals
- [ ] Monitorar Core Web Vitals
- [ ] Configurar alertas de performance

### **SEO:**
- [ ] Configurar meta tags dinâmicas
- [ ] Ativar sitemap automático
- [ ] Configurar robots.txt
- [ ] Implementar JSON-LD estruturado

---

## 🚀 **Passo a Passo de Execução**

### **Fase 1: Setup Vercel (Hoje)**
1. **Criar conta Vercel empresarial**
2. **Conectar com GitHub `sena-technologies`**
3. **Configurar informações básicas**

### **Fase 2: Domínio (Esta semana)**
1. **Verificar propriedade do domínio `senatechnologies.com.br`**
2. **Configurar DNS apontando para Vercel**
3. **Ativar SSL e verificar funcionamento**

### **Fase 3: Deploy Website (Hoje)**
1. **Migrar projeto para repositório empresarial**
2. **Conectar repositório no Vercel**
3. **Configurar deploy automático**
4. **Testar deploy e funcionamento**

---

## 📋 **Checklist de Validação**

### **Antes do Deploy:**
- [ ] Código no repositório empresarial
- [ ] Variáveis de ambiente configuradas
- [ ] Build local funcionando
- [ ] Testes passando

### **Após Deploy:**
- [ ] Site carregando corretamente
- [ ] SSL ativo e funcionando
- [ ] Performance > 90 (Lighthouse)
- [ ] SEO otimizado
- [ ] Responsivo funcionando
- [ ] Analytics configurado

---

## 💡 **Benefícios da Configuração Empresarial**

### **Profissionalismo:**
- ✅ Domínio próprio da empresa
- ✅ URLs consistentes e brandadas
- ✅ Certificados SSL empresariais
- ✅ Analytics profissionais

### **Escalabilidade:**
- ✅ Múltiplos projetos organizados
- ✅ Subdomínios para demos
- ✅ Deploy automático
- ✅ Monitoramento centralizado

### **Credibilidade:**
- ✅ Apresentação profissional para clientes
- ✅ Portfolio acessível e organizado
- ✅ Performance otimizada
- ✅ Disponibilidade 99.9%

---

*Documento criado em: ${new Date().toLocaleDateString('pt-BR')}*
*Próxima atualização: Após conclusão da migração*
