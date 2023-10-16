// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { OmitMultiple, Repository } from "../../utils/interfaces";

// Example response repo
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<OmitMultiple<Repository, "languages_url" | "commits_url">[]>
) {
  let repos_url = "https://api.github.com/users/nachomglz/repos"

  try {
    let response = await fetch(repos_url)
    let json_response: Repository[] = await response.json()

    let repos = json_response.map(repo => ({
      name: repo.name,
      full_name: repo.full_name,
      html_url: repo.html_url,
      url: repo.url,
      languages: [],
      commit_amount: 2,
      created_at: new Date(repo.created_at),
      ssh_url: repo.ssh_url,
      language: repo.language,
      clone_url: repo.clone_url,
      pushed_at: repo.pushed_at,
      updated_at: repo.updated_at,
      description: repo.description ?? "",
      private: repo.private
    })).sort((a, b) => Date.parse(b.updated_at.toString()) - Date.parse(a.updated_at.toString()))

    return res.status(200).send(repos)
  } catch (error) {
    console.error("Error getting repos: ", error)
    return res.status(500)
  }
}
