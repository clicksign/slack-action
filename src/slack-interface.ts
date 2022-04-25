export interface ISlack {
  payload: string
  channelID: string
  threadTS: string
  environment: string
  template: string
}

export interface IBlocks {
  type: string
  text: any
  accessory?: any
}

export interface ITemplatesDefault {
  repoName: string
  tag: string
  environment: string
}
