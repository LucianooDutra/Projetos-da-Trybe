SELECT 
	ar.artista_nome AS artista, 
  al.album_nome AS album,
  COUNT(s.usuario_id) AS seguidores
FROM SpotifyClone.artista AS ar
INNER JOIN SpotifyClone.albums AS al
ON ar.artista_id = al.artista_id
INNER JOIN SpotifyClone.seguidor AS s
ON s.artista_id = al.artista_id
GROUP BY
	al.album_nome,
  ar.artista_nome
ORDER BY 
	COUNT(s.artista_id) DESC,
  ar.artista_nome ASC,
  al.album_nome ASC;
  