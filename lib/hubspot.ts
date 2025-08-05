// HubSpot CRM Integration
// Configuração para integração com HubSpot CRM

interface HubSpotContact {
  email: string;
  firstname: string;
  lastname?: string;
  company?: string;
  phone?: string;
  message?: string;
  website?: string;
  lifecyclestage?: string;
  lead_source?: string;
}

interface HubSpotResponse {
  success: boolean;
  contact?: any;
  error?: string;
}

// Função para criar contato no HubSpot
export async function createHubSpotContact(
  contactData: HubSpotContact
): Promise<HubSpotResponse> {
  try {
    // Configuração da API do HubSpot
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
    const HUBSPOT_PORTAL_ID = process.env.HUBSPOT_PORTAL_ID;

    if (!HUBSPOT_API_KEY) {
      console.warn('HubSpot API key não configurada');
      return { success: false, error: 'API key não configurada' };
    }

    // Preparar dados para o HubSpot (apenas propriedades básicas)
    const properties = {
      email: contactData.email,
      firstname: contactData.firstname,
      lastname: contactData.lastname || '',
      company: contactData.company || '',
      phone: contactData.phone || ''
    };

    // Fazer requisição para a API do HubSpot
    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/contacts`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: properties
      })
    });

    if (response.ok) {
      const contact = await response.json();
      console.log('Contato criado no HubSpot:', contact.id);
      
      // Se há mensagem, adicionar como nota
      if (contactData.message) {
        await addNoteToContact(contact.id, contactData.message, HUBSPOT_API_KEY);
      }
      
      return { success: true, contact };
    } else {
      // Se contato já existe, tentar atualizar
      if (response.status === 409) {
        return await updateHubSpotContact(contactData.email, properties);
      }
      
      const error = await response.text();
      console.error('Erro ao criar contato no HubSpot:', error);
      return { success: false, error };
    }

  } catch (error) {
    console.error('Erro na integração HubSpot:', error);
    return { success: false, error: 'Erro interno na integração' };
  }
}

// Função para atualizar contato existente
async function updateHubSpotContact(
  email: string, 
  properties: any
): Promise<HubSpotResponse> {
  try {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;

    // Buscar contato pelo email
    const searchResponse = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts/search`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          filterGroups: [{
            filters: [{
              propertyName: 'email',
              operator: 'EQ',
              value: email
            }]
          }]
        })
      }
    );

    if (searchResponse.ok) {
      const searchResult = await searchResponse.json();
      
      if (searchResult.results && searchResult.results.length > 0) {
        const contactId = searchResult.results[0].id;
        
        // Atualizar contato existente
        const updateResponse = await fetch(
          `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
          {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ properties })
          }
        );

        if (updateResponse.ok) {
          const contact = await updateResponse.json();
          console.log('Contato atualizado no HubSpot:', contactId);
          return { success: true, contact };
        }
      }
    }

    return { success: false, error: 'Não foi possível atualizar contato' };

  } catch (error) {
    console.error('Erro ao atualizar contato HubSpot:', error);
    return { success: false, error: 'Erro interno na atualização' };
  }
}

// Função para obter estatísticas básicas
export async function getHubSpotStats() {
  try {
    const HUBSPOT_API_KEY = process.env.HUBSPOT_API_KEY;
    
    if (!HUBSPOT_API_KEY) {
      return null;
    }

    const response = await fetch(
      `https://api.hubapi.com/crm/v3/objects/contacts?limit=1`,
      {
        headers: {
          'Authorization': `Bearer ${HUBSPOT_API_KEY}`,
        }
      }
    );

    if (response.ok) {
      const data = await response.json();
      return {
        totalContacts: data.total || 0,
        connected: true
      };
    }

    return { connected: false };
  } catch (error) {
    console.error('Erro ao obter estatísticas HubSpot:', error);
    return { connected: false };
  }
}

// Função para adicionar nota a um contato
async function addNoteToContact(contactId: string, message: string, apiKey: string) {
  try {
    const response = await fetch(`https://api.hubapi.com/crm/v3/objects/notes`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        properties: {
          hs_note_body: message,
          hs_timestamp: new Date().toISOString()
        },
        associations: [
          {
            to: { id: contactId },
            types: [
              {
                associationCategory: "HUBSPOT_DEFINED",
                associationTypeId: 202
              }
            ]
          }
        ]
      })
    });

    if (response.ok) {
      console.log('Nota adicionada ao contato com sucesso');
    } else {
      const error = await response.text();
      console.warn('Falha ao adicionar nota:', error);
    }
  } catch (error) {
    console.warn('Erro ao adicionar nota:', error);
  }
}
