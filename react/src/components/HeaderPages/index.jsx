/* eslint-disable react/prop-types */
import { Header, TextDireita, TextEsquerda } from "./styles"

function HeaderPage({ title, subtitle, location }) {
    return (
        <Header>
            <TextEsquerda><h2>{title}</h2><h5>{subtitle}</h5></TextEsquerda><TextDireita><h6><a href="">{location}</a></h6></TextDireita>
        </Header>
    )
}

export default HeaderPage

