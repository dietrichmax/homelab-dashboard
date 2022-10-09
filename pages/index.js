import Head from 'next/head'
import Layout from '@/components/layout/layout'
import LinkCard from '@/components/links/links'
import styled from "styled-components"

const Container = styled.main`
  margin: var(--space);
`

const Grid = styled.div`
  display: grid;
  padding-inline-start: 0px;
  gap: var(--space);
  grid-template-columns: repeat(0, minmax(0px, 1fr));
  margin-bottom: var(--space);
`

const ServiceGrid = styled.ol`
  display: grid;
  padding: var(--space-sm);
  list-style: none;
  gap: var(--space);
  grid-template-columns: repeat(5, minmax(0px, 1fr));
  border: 2px solid var(--content-bg);

`

const ServiceContainer = styled.div``

const Subtitle = styled.h2`
  color: var(--primary-color);
  font-size: 1.25rem;
  margin: 0 0 var(--space-sm) 0;
`


const BookmarkContainer = styled.div`
  padding: var(--space-sm);
  list-style: none;
  `

const AllBookmarkItems = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-inline-start: 0px;
  margin-top: var(--space);
`

const BookmarkItems = styled.div`
  margin-right: var(--space);
  border-right : 2px solid var(--content-bg);
  min-width: 10%;
  padding: 0.25rem;
`

const BookmarkItemTitle = styled.p`
  font-weight: bold;
  padding: 0.5rem;
`

const BookmarkItem = styled.p`
  padding: 0.5rem;
  transition: 0.2s;
  :hover {
    color: var(--primary-color);
  }
`


export default function Home() {

  return (
    <Layout>
      <Head>
        <title>HomeLab</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        {/*<Title>Hi Max!</Title>*/}
        <Grid>

          <ServiceContainer>
            <Subtitle>Dashboard</Subtitle>
            <ServiceGrid>
              {dashboard.map((application, i) => {
                return <LinkCard key={i}item={application}/>
              })}
            </ServiceGrid>
          </ServiceContainer>

        </Grid>

          
        <BookmarkContainer>
          <Subtitle>Bookmarks</Subtitle>

            <AllBookmarkItems>
              <BookmarkItems>
                <BookmarkItemTitle>Socials</BookmarkItemTitle>
                {socials.map((item, i) => {
                  return (
                    <BookmarkItem key={i}>
                      <a href={item.url} title={item.name} alt={item.name}>{item.name}</a>
                    </BookmarkItem>
                  )
                })}
              </BookmarkItems>              
              
              <BookmarkItems>
                <BookmarkItemTitle>Reddit</BookmarkItemTitle>
                {reddit.map((item, i) => {
                  return (
                    <BookmarkItem key={i}>
                      <a href={item.url} title={item.name} alt={item.name}>{item.name}</a>
                    </BookmarkItem>
                  )
                })}
              </BookmarkItems>
            
            
              <BookmarkItems>
                <BookmarkItemTitle>Email</BookmarkItemTitle>
                    <BookmarkItem>
                      <a href={"https://www.freenet.de/"} title={"freenet"} alt={"Personal Email"}>Personal Email</a>
                    </BookmarkItem>
              </BookmarkItems>

              <BookmarkItems>
                <BookmarkItemTitle>Personal</BookmarkItemTitle>
                    <BookmarkItem>
                      <a href={"https://mxd.codes/cv"} title={"mxd.codes/cv"} alt={"mxd.codes/cv"}>CV</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://mxd.codes/articles"} title={"mxd.codes/articles"} alt={"mxd.codes/articles"}>Articles</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://mxd.codes/photos"} title={"mxd.codes/photos"} alt={"mxd.codes/photos"}>Photos</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://mxd.codes/links"} title={"mxd.codes/links"} alt={"mxd.codes/links"}>Links</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://mxd.codes/notes"} title={"mxd.codes/notes"} alt={"mxd.codes/notes"}>Notes</a>
                    </BookmarkItem>
              </BookmarkItems>

              <BookmarkItems>
                <BookmarkItemTitle>Banking</BookmarkItemTitle>
                    <BookmarkItem>
                      <a href={"https://www.dkb.de/banking"} title={"DKB"} alt={"DKB"}>DKB</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://businesstravelportal.airplus.com/"} title={"AirPlus Portal"} alt={"AirPlus Portal"}>AirPlus Portal</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://de.scalable.capital/broker/success"} title={"Scalable"} alt={"Scalable"}>Scalable</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://portal.ebase.com/(e1)/finvesto/login?eox=r"} title={"Finvesto"} alt={"Finvesto"}>Finvesto</a>
                    </BookmarkItem>
              </BookmarkItems>


              <BookmarkItems>
                <BookmarkItemTitle>Cloud-Computing</BookmarkItemTitle>
                    <BookmarkItem>
                      <a href={"https://www.customercontrolpanel.de/"} title={"Netcup CCP"} alt={"Netcup CCP"}>Netcup CCP</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://www.servercontrolpanel.de/SCP/Home"} title={"Netcup SCP"} alt={"Netcup SCP"}>Netcup SCP</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://aws.amazon.com"} title={"AWS"} alt={"AWS"}>AWS</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://cloud.google.com"} title={"GCP"} alt={"GCP"}>GCP</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://azure.microsoft.com"} title={"Azure"} alt={"Azure"}>Azure</a>
                    </BookmarkItem>
              </BookmarkItems>

              <BookmarkItems>
                <BookmarkItemTitle>Other</BookmarkItemTitle>
                    <BookmarkItem>
                      <a href={"https://web.whatsapp.com/"} title={"Whatsapp Web"} alt={"Whatsapp Web"}>Whatsapp Web</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://indieweb.org/"} title={"IndieWeb"} alt={"IndieWeb"}>IndieWeb</a>
                    </BookmarkItem>
                    <BookmarkItem>
                      <a href={"https://webmention.io/api/mentions.html?token=rxwJcoKxWCd9n3NA9SoxeQ"} title={"Webmentions"} alt={"Webmentions"}>Webmentions</a>
                    </BookmarkItem>
              </BookmarkItems>

            </AllBookmarkItems>


          </BookmarkContainer>
        


      </Container>

      <footer>
      </footer>
    </Layout>
  )
}


const dashboard = [
{
  "name": "Proxmox",
  "description": "Proxmox Virtual Environment",
  "url": "https://192.168.2.120:8006",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/proxmox.png",
  },
  {
  "name": "Proxmox Backup Server",
  "description": "Network-wide protection",
  "url": process.env.NEXT_PUBLIC_PROXMOX_BACKUP_SERVER,
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/proxmox.png",
  },

  {
  "name": "Pi-hole",
  "description": "Network-wide protection",
  "url": "http://pihole.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/pihole.png",
  },
  {
  "name": "Nginx Proxy Manager",
  "description": "Network-wide protection",
  "url": "http://npm.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/nginxproxymanager.png",
  },
  {
  "name": "Portainer",
  "description": "Docker and Kubernetes Management",
  "url": "http:/portainer.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/portainer.png",
  },
  {
  "name": "Router",
  "description": "Telekom Speedport",
  "url": "http://router.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/router.png",
  },
  {
  "name": "Cloudflare",
  "description": "DNS + Proxy",
  "url": "https://dash.cloudflare.com/",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/cloudflare.png",
  },
  {
  "name": "Jellyfin",
  "description": "Media System",
  "url": "http://media.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/jellyfin.png",
  },
  {
  "name": "Jellyseerr",
  "description": "Media System",
  "url": "http://jellyseerr.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/jellyseerr.png",
  },
  {
  "name": "PhotoPrism",
  "description": "Photos",
  "url": "http://photos.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/photoprism.png",
  },
  {
  "name": "Radarr",
  "description": "Movies",
  "url": "http://radarr.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/radarr.png",
  },
  {
  "name": "Sonarr",
  "description": "TV-Shows",
  "url": "http://sonarr.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/sonarr.png",
  },
  {
  "name": "Bazarr",
  "description": "Subtitles",
  "url": "http://bazarr.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/bazarr.png",
  },
  {
  "name": "CloudBeaver",
  "description": "Cloud Database Manager ",
  "url": "http://cloudb.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/cloudbeaver.png",
  },
  {
  "name": "Mailcow",
  "description": "mailcow: dockerized - 🐮 + 🐋 = 💕",
  "url": "mailcow/mailcow-dockerized",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/mailcow.png",
  },
  {
  "name": "QBittorrent",
  "description": "BitTorrent client",
  "url": "http://torrents.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/qbittorrent.png",
  },
  {
  "name": "Prowlarr",
  "description": "Proxy Server",
  "url": "http://prowlarr.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/prowlarr.png",
  },
  {
  "name": "Tandoor",
  "description": "Proxy Server",
  "url": "http://tandoor.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/tandoorrecipes.png",
  },
  {
  "name": "Home Assistant",
  "description": "Proxy Server",
  "url": "http://ha.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/home-assistant-circle.png",
  },
  {
  "name": "mxd.codes",
  "description": "Personal website",
  "url": "http://mxd.lan",
  "icon": "https://api.mxd.codes/uploads/small_android_launchericon_512_512_a7c8044a93.png",
  },
  {
  "name": "Strapi",
  "description": "Strapi",
  "url": "http://strapi.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/strapi.png",
  },
  {
  "name": "Matomo",
  "description": "Web Analytics",
  "url": "http://analytics.lan",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/matomo.png",
  },
  {
  "name": "Github",
  "description": "Github",
  "url": "https://mxd.codes/github",
  "icon": "https://cdn.jsdelivr.net/gh/walkxcode/dashboard-icons/png/github.png",
  }
]

const reddit = [
    {
      "name": "r/homelab/",
      "url": "https://www.reddit.com/r/homelab/"
    },
    {
      "name": "/r/selfhosted/",
      "url": "https://www.reddit.com/r/selfhosted/"
    },
    {
      "name": "/r/finanzen",
      "url": "https://www.reddit.com/r/finanzen/"
    },
    {
      "name": "/r/de/",
      "url": "https://www.reddit.com/r/de/"
    },
]

const socials = [
  {
    "name": "Twitter",
    "url": "https://mxd.codes/twitter"
  },
  {
    "name": "Linkedin",
    "url": "https://mxd.codes/linkedin"
  },
  {
    "name": "Instagram",
    "url": "https://mxd.codes/instagram"
  },
  {
    "name": "Strava",
    "url": "https://mxd.codes/strava"
  },
  {
    "name": "Xing",
    "url": "https://mxd.codes/xing"
  }
]