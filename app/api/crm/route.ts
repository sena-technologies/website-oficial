import { NextRequest, NextResponse } from 'next/server';
import { createHubSpotContact } from '@/lib/hubspot';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validar dados obrigatórios
    if (!body.email || !body.name) {
      return NextResponse.json(
        { success: false, error: 'Email e nome são obrigatórios' },
        { status: 400 }
      );
    }

    // Separar nome em primeiro e último nome
    const nameParts = body.name.trim().split(' ');
    const firstname = nameParts[0];
    const lastname = nameParts.slice(1).join(' ') || '';

    // Preparar dados para o HubSpot
    const contactData = {
      email: body.email,
      firstname: firstname,
      lastname: lastname,
      company: body.company || '',
      phone: body.phone || '',
      message: body.message || '',
      lifecyclestage: 'lead',
      lead_source: 'website_form'
    };

    // Enviar para HubSpot
    const hubspotResult = await createHubSpotContact(contactData);

    if (hubspotResult.success) {
      return NextResponse.json({
        success: true,
        message: 'Contato adicionado ao CRM com sucesso',
        hubspot: {
          contactId: hubspotResult.contact?.id,
          created: true
        }
      });
    } else {
      // Mesmo se falhar no HubSpot, não queremos quebrar o fluxo do usuário
      console.warn('Falha no HubSpot, mas formulário processado:', hubspotResult.error);
      
      return NextResponse.json({
        success: true,
        message: 'Formulário processado com sucesso',
        hubspot: {
          created: false,
          error: hubspotResult.error
        }
      });
    }

  } catch (error) {
    console.error('Erro na API de CRM:', error);
    
    return NextResponse.json({
      success: false,
      error: 'Erro interno do servidor'
    }, { status: 500 });
  }
}
