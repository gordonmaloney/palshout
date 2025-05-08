export const ALL_CAMPAIGNS = [
	{
		campaignId: "timetodivest",
		campaign: {
			id: "timetodivest",
			title: "Demand LPF divest from apartheid",
			host: "Time to Divest Edinburgh",
			channel: "email",
			target: "custom",
			blurb: `The Lothian Pension Fund invests millions of pounds of council-workers' money in propping up Israeli apartheid. Will you write to the pensions committee and demand they vote to divest?`,
			link: "https://linktr.ee/timetodivest",
			prompts: [
				{
					id: "member",
					question: "Are you a member of the Lothian Pension fund?",
					answerType: "yesno",
					required: true,
					answer: null,
				},
				{
					id: "yourname",
					question: "Your name:",
					answerType: "text",
					required: true,
					answer: null,
				},
			],
			subject: "Divest from apartheid!",
			bcc: "timetodivestedinburgh@gmail.com",
			template: `I am writing as a concerned constituent regarding your role on the Lothian Pension Fund’s pensions committee and to express my strong support for the Edinburgh Time to Divest Campaign. I agree that there is a moral imperative to divest from Lockheed Martin, Northrop Grumman, General Dynamics, Caterpillar, Cisco and Siemens. Over 40,000 Palestinians have been killed and over 77,000 wounded in Israel’s relentless attack on Gaza whilst thousands are detained in the West Bank.

The advisory opinion from the International Court of Justice in July has now rendered beyond doubt Israel’s decades-long occupation of the Palestinian territories as illegal and amounting to apartheid. By continuing to hold investments in companies complicit in Israel’s illegal occupation, the Lothian Pension Fund is flagrantly neglecting its ESG responsibilities.

In response to the Russian invasion of Ukraine, the Lothian Pension Fund claimed that “respect for human rights is a priority engagement theme”. Respect for human rights is simply incompatible with continued investments in Israeli apartheid. Serious questions must also be asked about their fiduciary integrity as well. As the UN’s highest court has instructed all member states, including the UK, not to “render aid or assistance in maintaining” Israel’s illegal occupation, it is clear that divestment from complicit companies is both the moral and financially responsible course of action.

Lockheed Martin, Northrop Grumman and General Dynamics are arms manufacturers whose weapons systems are used by the IDF against Palestinian civilians.

Caterpillar provides demolition equipment, often militarised, to the IDF which is used to demolish Palestinian homes, clearing entire Palestinian villages that have existed for hundreds of years.

Siemens and Cisco are technology companies involved in the illegal settlement of the West Bank and the monitoring of the Palestinians living there.

Divestment represents an opportunity for the Pensions Committee to stand firmly on the side of its ESG commitments. I urge you to publicly support divestment and to take every possible measure to ensure it passes as a committee motion.
<<member=yes:
I am a pension holder with the LPF and am ashamed and infuriated to know my pension deductions are being used to invest in these complicit companies.
>>
I look forward to your response and to seeing your continued commitment to these crucial principles.

Yours sincerely,
<<yourname>>`,
			customTarget: [""],
		},
	},
	{
		campaignId: "scot4pal",
		campaign: {
			id: "scot4pal",
			title: "One year till Holyrood",
			host: "Scotland for Palestine",
			channel: "email",
			target: "msps",
			blurb: `With one year to go until the 2026 Holyrood elections, demand your MSPs back our demands to stand with Palestine:`,
			link: "https://www.instagram.com/scotlandforpalestine/",
			prompts: [
				{
					id: "story",
					question: "Why does this matter to you? Your answer will be incorporated into the template email, so let your MSPs know why you care about this so much.",
					answerType: "text",
					required: true,
					answer: null,
				},
				{
					id: "yourname",
					question: "Your name:",
					answerType: "text",
					required: true,
					answer: null,
				},
			],
			subject: "Stand with Palestine",
			bcc: "scotland4palestine@gmail.com",
			template: `Dear MSPs,

<<story>>

I am writing ahead of the upcoming Scottish elections on 7 May 2026. In order to make an informed decision, I would like to know whether you will publicly push for:
- an end to Scottish government funding for Israeli arms companies
- concrete steps to help end Israel’s decades-long illegal occupation of Palestine, the root cause of the cycle of violence
- a cultural and sports boycott for Israel until it complies with international law, and
- use the International Criminal Court (Scotland) Act 2001 to pursue perpetrators resident in Scotland, including Israeli soldiers who have committed crimes against humanity

Scotland can not be complicit in apartheid, occupation, and genocide.

The Scottish government has always pushed the narrative that it is more progressive and compassionate than the UK government. That it respects human rights and international law.
But actions have to match the rhetoric, and the Scottish government can no longer hide behind Westminster. It must take heed of international rulings against Israel, an apartheid regime and the world’s longest illegal occupation, that stands accused by the world’s highest court - the International Court of Justice - of genocide.
As my representative, you must put words into action and push for a lasting and just peace by using the powers at your disposal to hold the Israeli government and those complicit in crimes against humanity to account. Similar to how Scotland stood against past illegal apartheid occupations, you must push for an end to business as usual with Israel until it complies with international law.
Concrete action to end the genocide

Condemnation of Israel without meaningful action rings hollow and won’t stop Israel from starving Palestinians en masse, from torturing surgeons to death and from assassinating Palestinian journalists as they report on Israel’s crimes.
No more empty words. No more whitewashing Israel.

During the South African apartheid, Scotland broke ranks with the UK government to lead the anti-apartheid movement.

As Nelson Mandela, was dubbed a ‘terrorist’ by Britain and many other Western nations and languished in prison on Robben Island, in 1981, Glasgow awarded Nelson Mandela the Freedom of the City - the first city in the world to do so. This was followed by Aberdeen in 1984 and Midlothian and Dundee in 1985.

Yet, when it comes to Israel, committing the first live-streamed genocide in history, all we hear are empty words.

I demand:
- an end to selective justice and hypocrisy
- an end to whitewashing Israel, and for it to be held to account
- an end to our hard-earned cash being used to fund Israeli arms and crimes

Our votes matter

As someone who stands against apartheid, occupation, and genocide, I am writing to ask you to tell me what concrete steps you will take to help end the illegal occupation of Palestine and the Palestinian genocide?

<<yourname>>`,
			customTarget: [""],
		},
	},
];
