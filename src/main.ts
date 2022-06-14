import * as core from '@actions/core'
import {slack} from './slack'

async function run(): Promise<void> {
  try {
    const repo = core.getInput('repo_name')
    const repoTag = core.getInput('repo_tag')
    const channelID = core.getInput('channel_id')
    const payload = core.getInput('payload')
    const threadTS = core.getInput('thread_ts')
    const environment = core.getInput('environment')
    const template = core.getInput('template')

    slack({
      repo,
      repoTag,
      channelID,
      payload,
      threadTS,
      environment,
      template
    })
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
