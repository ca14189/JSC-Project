import AIUseCases from "@/components/ai-development/AIUseCases"
import DevelopmentApproach from "@/components/ai-development/DevelopmentApproach"
import FinalCTA from "@/components/ai-development/FinalCTA"
import FrontendHumanLayerCard from "@/components/ai-development/OurAIStack"
import FullStackAIClarity from "@/components/ai-development/FullStackAIClarity"
import Hero from "@/components/ai-development/Hero.tsx"
import WhyJSChamps from "@/components/ai-development/WhyJSChamps"


const page = () => {
  return (
    <>
        <Hero/>
        <FullStackAIClarity/>
        <FrontendHumanLayerCard/>
        <AIUseCases/>
        <DevelopmentApproach/>
        <WhyJSChamps/>
        <FinalCTA/>
    </>
  )
}

export default page