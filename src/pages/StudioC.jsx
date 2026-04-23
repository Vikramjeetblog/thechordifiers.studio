import React from 'react'
import StudioHero from "../components/studio/studioC/StudioHero"
import Equipment from "../components/studio/studioC/Equipment"
import StudioIntro from "../components/studio/studioC/StudioIntro"
import StudioCTA from "../components/studioCTA"
const StudioC = () => {
	return (
		<div>
		<StudioHero/>
		<StudioIntro/>
		<Equipment/>
		<StudioCTA/>	
		</div>
	)
}

export default StudioC