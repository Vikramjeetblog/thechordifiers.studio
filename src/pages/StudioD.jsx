import React from 'react'
import StudioHero from "../components/studio/studioD/StudioHero"
import Equipment from "../components/studio/studioD/Equipment"
import StudioIntro from "../components/studio/studioD/StudioIntro"
import StudioCTA from "../components/studioCTA"
import StudioGallery from "../components/studio/studioA/StudioGallery"
const StudioB = () => {
	return (
		<div>
		<StudioHero/>
		<StudioIntro/>
		<StudioGallery/>
		<Equipment/>
		<StudioCTA/>	
		</div>
	)
}

export default StudioB