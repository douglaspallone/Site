import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { SUPPORT_PHONE_DISPLAY } from "@/lib/links"

export const metadata: Metadata = {
  title: "Política de Privacidade | GuinCheck",
  description:
    "Saiba como o Checklist Guincho (GuinCheck) coleta, usa, armazena e protege as informações dos usuários.",
}

const sections = [
  {
    title: "1. Dados que coletamos",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          O Checklist Guincho pode coletar os seguintes dados, conforme o uso do aplicativo:
        </p>

        <h3 className="mt-6 font-semibold text-foreground">Dados de conta e autenticação:</h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>nome;</li>
          <li>e-mail;</li>
          <li>identificador de usuário;</li>
          <li>dados de login via e-mail/senha ou login com Google.</li>
        </ul>

        <h3 className="mt-6 font-semibold text-foreground">Dados do perfil do motorista ou empresa:</h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>nome fantasia;</li>
          <li>CNPJ;</li>
          <li>nome do responsável;</li>
          <li>CPF;</li>
          <li>logotipo;</li>
          <li>assinatura cadastrada;</li>
          <li>modelos de checklist personalizados.</li>
        </ul>

        <h3 className="mt-6 font-semibold text-foreground">Dados de veículos:</h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>placa;</li>
          <li>modelo;</li>
          <li>informações vinculadas ao cadastro do veículo.</li>
        </ul>

        <h3 className="mt-6 font-semibold text-foreground">Dados dos checklists:</h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>nome da base;</li>
          <li>seguradora;</li>
          <li>nome e RG do cliente;</li>
          <li>dados do veículo, como marca, modelo, cor, placa e quilometragem;</li>
          <li>local de atendimento e destino informados pelo usuário;</li>
          <li>motivo da chamada;</li>
          <li>itens vistoriados;</li>
          <li>observações;</li>
          <li>fotos de remoção e recebimento;</li>
          <li>nome e RG do recebedor;</li>
          <li>assinaturas do cliente e do recebedor;</li>
          <li>arquivos PDF gerados a partir do checklist.</li>
        </ul>

        <h3 className="mt-6 font-semibold text-foreground">Dados de pagamento e assinatura:</h3>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>status da assinatura;</li>
          <li>plano contratado;</li>
          <li>informações de checkout;</li>
          <li>identificadores de pagamento ou assinatura fornecidos pelo provedor de pagamento;</li>
          <li>dados necessários para validar acesso, cupons, pagamentos pendentes ou cancelamentos.</li>
        </ul>

        <p className="mt-6 text-muted-foreground leading-relaxed">
          O aplicativo não armazena dados completos de cartão de crédito. Pagamentos são processados por provedores
          terceiros, como Mercado Pago, conforme suas próprias políticas.
        </p>
      </>
    ),
  },
  {
    title: "2. Como usamos os dados",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">Usamos os dados para:</p>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>criar e gerenciar contas de usuário;</li>
          <li>permitir login com e-mail/senha ou Google;</li>
          <li>cadastrar perfil do motorista ou empresa;</li>
          <li>registrar veículos;</li>
          <li>criar, salvar, sincronizar e consultar checklists;</li>
          <li>gerar PDFs com dados, fotos e assinaturas dos checklists;</li>
          <li>permitir uso offline e posterior sincronização;</li>
          <li>controlar acesso, plano, pagamento e assinatura;</li>
          <li>melhorar estabilidade, corrigir erros e monitorar falhas de sincronização;</li>
          <li>cumprir obrigações legais, fiscais, contratuais e de segurança.</li>
        </ul>
      </>
    ),
  },
  {
    title: "3. Armazenamento local e sincronização",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          O Checklist Guincho pode armazenar dados localmente no dispositivo para permitir uso offline, incluindo
          checklists, fotos, assinaturas, veículos e perfil do usuário.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Quando houver conexão com a internet, esses dados podem ser sincronizados com servidores em nuvem, como
          Firebase/Google Cloud, para backup, continuidade do serviço e acesso entre dispositivos.
        </p>
      </>
    ),
  },
  {
    title: "4. Compartilhamento de dados",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Podemos compartilhar dados apenas quando necessário para funcionamento do serviço, incluindo:
        </p>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>Firebase/Google Cloud, para autenticação, banco de dados, armazenamento de arquivos e infraestrutura;</li>
          <li>Google, para autenticação com conta Google;</li>
          <li>Mercado Pago ou outro provedor de pagamento, para processamento de pagamentos e assinaturas;</li>
          <li>serviços técnicos usados para hospedagem, segurança, análise operacional e suporte.</li>
        </ul>
        <p className="mt-4 text-muted-foreground leading-relaxed">Não vendemos dados pessoais dos usuários.</p>
      </>
    ),
  },
  {
    title: "5. Fotos, assinaturas e documentos",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          As fotos, assinaturas e PDFs enviados ou gerados no aplicativo são usados para documentar os atendimentos de
          guincho, remoção, entrega e recebimento de veículos.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Esses arquivos podem conter dados pessoais ou imagens de veículos, documentos, locais e pessoas. O usuário
          deve utilizar essas funções apenas quando tiver autorização ou base legítima para registrar tais informações.
        </p>
      </>
    ),
  },
  {
    title: "6. Segurança dos dados",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Adotamos medidas técnicas e organizacionais para proteger os dados, incluindo autenticação, regras de acesso,
          armazenamento em serviços de nuvem, comunicação segura e controle de acesso por usuário.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Apesar dos esforços de segurança, nenhum sistema é totalmente imune a falhas. Em caso de incidente relevante,
          tomaremos as medidas cabíveis conforme a legislação aplicável.
        </p>
      </>
    ),
  },
  {
    title: "7. Retenção e exclusão",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          Mantemos os dados enquanto forem necessários para fornecer o serviço, cumprir obrigações legais, resolver
          disputas, manter registros operacionais ou enquanto a conta do usuário estiver ativa.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O usuário pode solicitar exclusão ou correção de seus dados pelo contato de suporte informado ao final desta
          política.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Alguns dados podem ser mantidos por prazo adicional quando necessários para cumprimento de obrigações legais,
          fiscais, contábeis, contratuais ou de segurança.
        </p>
      </>
    ),
  },
  {
    title: "8. Direitos do usuário",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">O usuário pode solicitar:</p>
        <ul className="mt-2 list-disc pl-6 text-muted-foreground leading-relaxed">
          <li>confirmação sobre tratamento de dados;</li>
          <li>acesso aos dados;</li>
          <li>correção de dados incompletos ou desatualizados;</li>
          <li>exclusão de dados, quando aplicável;</li>
          <li>informações sobre compartilhamento;</li>
          <li>revogação de consentimentos, quando o tratamento depender de consentimento.</li>
        </ul>
      </>
    ),
  },
  {
    title: "9. Permissões do dispositivo",
    content: (
      <>
        <p className="text-muted-foreground leading-relaxed">
          O aplicativo pode solicitar acesso a arquivos, fotos ou recursos do dispositivo quando o usuário optar por
          anexar imagens, gerar documentos ou salvar arquivos.
        </p>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          O app não coleta localização em segundo plano. Locais de atendimento e destino são informados manualmente pelo
          usuário no checklist.
        </p>
      </>
    ),
  },
  {
    title: "10. Crianças e adolescentes",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        O Checklist Guincho é destinado ao uso profissional por motoristas, empresas, bases operacionais e usuários
        autorizados. O aplicativo não é direcionado a crianças.
      </p>
    ),
  },
  {
    title: "11. Alterações nesta política",
    content: (
      <p className="text-muted-foreground leading-relaxed">
        Podemos atualizar esta Política de Privacidade para refletir mudanças no aplicativo, requisitos legais ou
        melhorias no serviço. A versão atualizada será publicada nesta página com a data de atualização.
      </p>
    ),
  },
]

export default function PrivacidadePage() {
  return (
    <main className="min-h-screen font-sans">
      <Header />

      <section className="border-b border-border bg-muted/30">
        <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
          <h1 className="mt-6 text-3xl font-bold tracking-tight text-foreground text-balance sm:text-4xl">
            Política de Privacidade
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Última atualização: 17 de julho de 2026</p>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="space-y-10">
          <div>
            <p className="text-muted-foreground leading-relaxed">
              Esta Política de Privacidade descreve como o aplicativo Checklist Guincho, também identificado como
              GuinCheck, coleta, usa, armazena e protege informações dos usuários.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Responsável pelo app:</span> 4C Solutions
            </p>
          </div>

          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-xl font-semibold text-foreground">{section.title}</h2>
              <div className="mt-3">{section.content}</div>
            </div>
          ))}

          <div className="rounded-xl border border-border bg-muted/30 p-6">
            <h2 className="text-xl font-semibold text-foreground">12. Contato</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Em caso de dúvidas sobre esta Política de Privacidade ou sobre o tratamento de dados pessoais, entre em
              contato:
            </p>
            <ul className="mt-4 space-y-1 text-muted-foreground leading-relaxed">
              <li>
                <span className="font-semibold text-foreground">4C Solutions</span>
              </li>
              <li>Estado: SP</li>
              <li>Contato: {SUPPORT_PHONE_DISPLAY}</li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </main>
  )
}
