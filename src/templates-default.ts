import {ITemplatesDefault} from './slack-interface'

interface ITemplates {
  [key: string]: string
}

function templatesDefault({
  repoName,
  tag,
  environment
}: ITemplatesDefault): ITemplates {
  const templates: ITemplates = {
    '1': `@channel \`*Iniciado*\` Deploy *${repoName}* \`${tag}\` em *${environment}*`,
    '2': `@channel \`*Finalizado*\` Deploy *${repoName}* \`${tag}\` em *${environment}*`,
    '3': `@channel \`*Falha*\` Deploy *${repoName}* \`${tag}\` em *${environment}*`
  }

  return templates
}

export default templatesDefault
