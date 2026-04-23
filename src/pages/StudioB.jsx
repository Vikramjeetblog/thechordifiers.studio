import React from 'react'
import StudioHero from "../components/studio/studioB/StudioHero"
import Equipment from "../components/studio/studioB/Equipment"
import StudioIntro from "../components/studio/studioB/StudioIntro"
import StudioCTA from "../components/studioCTA"
const StudioB = () => {
	return (
		<div>
		<StudioHero/>
		<StudioIntro/>
		<Equipment/>
		<StudioCTA/>	
		</div>
	)
}

export default StudioB