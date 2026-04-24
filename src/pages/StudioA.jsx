import React from 'react'
import StudioHero from "../components/studio/studioA/StudioHero"
import Equipment from "../components/studio/studioA/Equipment"
import StudioIntro from "../components/studio/studioA/StudioIntro"
import StudioCTA from "../components/studioCTA";
import StudioGallery from "../components/studio/studioA/StudioGallery"
const StudioA = () => {
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

export default StudioA