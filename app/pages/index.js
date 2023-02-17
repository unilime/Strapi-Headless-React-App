import { getPageData } from '@/helpers/helpers'
import { useEffect, useState } from 'react'

import Hero from '@/components/Homepage/Hero'
import Info from '@/components/Homepage/Info'
import Brand from '@/components/Homepage/Brand'
import WhatWeDo from '@/components/Homepage/WhatWeDo'
import Review from '@/components/Homepage/Review'

export default function Home() {
	const [heroSection, setHeroSection] = useState([])
	const [infoSection, setInfoSection] = useState([])
	const [brandSection, setBrandSection] = useState([])
	const [wedoSection, setWedoSection] = useState([])
	const [reviewSection, setReviewSection] = useState([])

	useEffect(() => {
		getPageData('homepage?populate=deep,4').then((data) => {
			setHeroSection(data?.data?.data?.attributes.Content[0])
			setInfoSection(data?.data?.data?.attributes.Content[1])
			setBrandSection(data?.data?.data?.attributes.Content[2])
			setWedoSection(data?.data?.data?.attributes.Content[3])
			setReviewSection(data?.data?.data?.attributes.Content[4])
		})
	}, [])

	return (
		<>
			<Hero data={heroSection} />
			<Info data={infoSection} />
			<Brand data={brandSection} />
			<WhatWeDo data={wedoSection} />
			<Review data={reviewSection} />
		</>
	)
}
