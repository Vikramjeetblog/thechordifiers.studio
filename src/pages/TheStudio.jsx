import React from 'react'
import StudioHero from "../components/studio/thestudio/StudioHero";
import StudioIntro from "../components/studio/thestudio/StudioIntro";
import StudioGrid from "../components/studio/thestudio/StudioGrid";
import StudioContact from "../components/studio/thestudio/StudioContact";
import StudioGallery from "../components/studio/studioA/StudioGallery"
const TheStudio = () => {
	return (
	<div className="bg-black text-white">
      <StudioHero />
      <StudioIntro />
      <StudioGrid />
      <StudioGallery/>
      <StudioContact />
    </div>
	)
}

export default TheStudio