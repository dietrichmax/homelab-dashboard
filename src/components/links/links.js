import React from "react"
import styled from "styled-components"
import Image from 'next/image'

const Card = styled.li`
    position: relative;
    transition: all 0.5s ease 0s;
    border: 1px solid var(--body-bg);
    border-radius: 6px;
    background-color: var(--content-bg);
    box-shadow: var(--box-shadow);
    padding: var(--space-sm);
    :hover {
      cursor: pointer;
      background-color: var(--primary-color);
      color: var(--content-bg);
    }
`
const ImageContainer = styled.div`
  margin-right: var(--space-sm);
`

const Title = styled.h3`
`

const SubTitle = styled.span`
  display: block;
  :hover {
    text-decoration: underline;
  }
`

const Link = styled.a`
  display: flex;
`

export default function LinksCard({item}) {

  //console.log(item.icon)
  return (
      <Card>
        <Link href={item.url} target="_blank" title={item.description} alt={item.description}>
          <ImageContainer>
            <Image
              src={item.icon}
              title={item.name}
              alt={item.name}
              width={30}
              height={30}
            />
          </ImageContainer>
          <div>
            <Title>{item.name}</Title>
            {/*<Description>{item.description}</Description>*/}
            <SubTitle>{item.url}</SubTitle>
            </div>
        </Link>
      </Card>
  )
}