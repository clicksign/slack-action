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
    '1': `@channel Deploy *${repoName}* \`${tag}\` em *${environment}*`,
    '2': `@channel Sanity Check Automatizado *${repoName}* \`${tag}\` em *${environment}*`
  }

  return templates
}

export default templatesDefault
