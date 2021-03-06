import urljoin from 'url-join'
import moment from 'moment'
import config from '../../data/siteConfig'


const editOnGithub = post => {
  const date = moment.utc(post.date).format(config.dateFromFormat)
  return urljoin(config.repo, '/blob/master/blog/posts', `${date}-${post.slug}.md`)
}

// export { editOnGithub }
// module.export = {editOnGithub}
export default editOnGithub