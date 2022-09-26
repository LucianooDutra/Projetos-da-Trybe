SELECT 
	ar.artista_nome AS artista, 
  al.album_nome AS album
FROM SpotifyClone.artista AS ar
INNER JOIN SpotifyClone.albums AS al
ON ar.artista_id = al.artista_id
AND
	ar.artista_nome = 'Elis Regina'
ORDER BY
  al.album_nome ASC;
