export default function trustURL($sce) {
	return (url) => $sce.trustAsResourceUrl(url)	
}
