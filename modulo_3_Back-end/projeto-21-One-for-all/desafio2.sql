SELECT 
	(SELECT COUNT(cancao_id) FROM SpotifyClone.cancoes) AS cancoes,
    (SELECT COUNT(artista_id) FROM SpotifyClone.artista) AS artistas,
    (SELECT COUNT(album_id) FROM SpotifyClone.albums) AS albuns;