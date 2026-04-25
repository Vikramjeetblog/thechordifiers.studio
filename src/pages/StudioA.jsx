import React from 'react'
import StudioHero from "../components/studio/studioA/StudioHero"
import Equipment from "../components/studio/studioA/Equipment"
import StudioIntro from "../components/studio/studioA/StudioIntro"
import StudioCTA from "../components/StudioCTA";

const StudioA = () => {
	return (
		<div>
		<StudioHero/>
		<StudioIntro/>
		
		<Equipment/>
		<StudioCTA/>	
		</div>
	)
}

export default StudioA
