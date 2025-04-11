import React, { useState, useEffect } from "react";

const Geolocalizacao = () => {
  const [localizacao, setLocalizacao] = useState({
    latitude: null,
    longitude: null,
    erro: null,
  });

  useEffect(() => {
    if (navigator.geolocation) {
      // Solicita a localização do usuário
      navigator.geolocation.getCurrentPosition(
        (posicao) => {
          // Sucesso: atualiza o estado com a localização
          setLocalizacao({
            latitude: posicao.coords.latitude,
            longitude: posicao.coords.longitude,
            erro: null,
          });
        },
        (erro) => {
          // Erro: atualiza o estado com a mensagem de erro
          setLocalizacao({
            latitude: null,
            longitude: null,
            erro: erro.message,
          });
        }
      );
    } else {
      // Navegador não suporta geolocalização
      setLocalizacao({
        latitude: null,
        longitude: null,
        erro: "Geolocalização não é suportada pelo seu navegador.",
      });
    }
  }, []);

  return (
    <div>
      <h2>Geolocalização</h2>
      {localizacao.erro ? (
        <p>Erro: {localizacao.erro}</p>
      ) : (
        <div>
          <p>Latitude: {localizacao.latitude}</p>
          <p>Longitude: {localizacao.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default Geolocalizacao;