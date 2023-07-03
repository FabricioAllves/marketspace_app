import React, { useState, useEffect } from 'react';
import { FlatList, ScrollView, View } from 'react-native'


import {
  Container,
  ContainerPadding,
  HeaderPhotoAndUsername,
  UserPhoto,
  NameUser,
  IsNew,
  StatusProduct,
  NameProductAndValue,
  NameProduct,
  ValueCifrao,
  ValueProduct,
  AboutProduct,
  TextBold,
  TextSimples,
  PaymentMethod,
  MethodsContainer,
  IconMethod,
  FooterButton,
} from './styles';
import { HeaderOptions } from '@components/HeaderOptions';
import { SlidePhotoProduct } from '@components/SlidePhotoProduct';
import { Button } from '@components/Button';


export function DetailsMyAds() {
  const [photo, setPhoto] = useState<string[]>([
    'https://th.bing.com/th/id/R.652c6f323ab35e15f52354de58ed4090?rik=8JtM0Lnr6uRbgw&pid=ImgRaw&r=0',
    'https://revistabikeup.com.br/wp-content/uploads/2017/01/tonic-fabrications-cyclocross-29er-1.jpg',
    'https://64.media.tumblr.com/2ab981342a0ea33dbe51566c2cc7017f/tumblr_mh7toopVSx1qcxw6so1_400.jpg',
  ]);

  const [method, setMetho] = useState([
    {
      "type": "barcode",
      "name": "Boleto"
    },
    {
      "type": "product-hunt",
      "name": "Pix"
    },
    {
      "type": "money",
      "name": "Dinheiro"
    },
    {
      "type": "credit-card",
      "name": "Cartão de Credito"
    },
    {
      "type": "university",
      "name": "Depósito Bancário"
    }
  ])

  return (
    <Container>
      <ScrollView
        
      >

        <ContainerPadding>
          <HeaderOptions
            showBackIcon={true}
            nameIcon='edit-3'
            showEditIcon={true}
          />
        </ContainerPadding>

        <View>
          <FlatList
            data={photo}
            renderItem={({ item }) => (
              <SlidePhotoProduct data={item} />
            )}
            horizontal
            pagingEnabled
          />
        </View>
        <ContainerPadding>
          <HeaderPhotoAndUsername>
            <UserPhoto source={{ uri: 'https://github.com/FabricioAllves.png' }} />
            <NameUser>Fabricio</NameUser>
          </HeaderPhotoAndUsername>

          <IsNew>
            <StatusProduct>novo</StatusProduct>
          </IsNew>

          <NameProductAndValue>
            <NameProduct>Bicicleta</NameProduct>
            <ValueCifrao>R$
              <ValueProduct>120.00</ValueProduct>
            </ValueCifrao>
          </NameProductAndValue>

          <AboutProduct>
            Cras congue cursus in tortor sagittis placerat nunc, tellus arcu. Vitae ante leo eget maecenas
            urna mattis cursus. Mauris metus amet nibh mauris mauris accumsan, euismod. Aenean leo nunc, purus iaculis in aliquam.
          </AboutProduct>

          <TextBold>
            Aceita troca?
            <TextSimples> Sim</TextSimples>
          </TextBold>

          <PaymentMethod>
            <TextBold>Meios de pagamento:</TextBold>
            {//Teste
              method.map(method => (
                <MethodsContainer key={method.name}>
                  <IconMethod name={method.type} />
                  <TextSimples>{method.name}</TextSimples>
                </MethodsContainer>
              ))
            }
          </PaymentMethod>

        </ContainerPadding>
        <FooterButton>
          <Button text='Desativar anúncio' type='BLACK' size='100' icon='trash' />
          <Button text='Excluir anúncio' type='GRAY' size='100' icon='power' />
        </FooterButton>
      </ScrollView>
    </Container>
  );
}