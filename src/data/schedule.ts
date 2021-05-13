export interface RawScheduleEvent {
  id: string
  title: string
  description: string // Accepts Markdown
  startHour: string
  endHour?: string
  emoji?: string
}

export interface RawScheduleDay {
  date: string
  events: RawScheduleEvent[]
}

export interface RawSchedule {
  countdownStart: string
  countdownEnd: string
  submitDeadline: string
  days: RawScheduleDay[]
}

export const schedule: RawSchedule = {
  countdownStart: '14/5/2021 21:00',
  countdownEnd: '16/5/2021 9:00',
  submitDeadline: '16/5/2021 9:00',
  days: [
    {
      date: '14/5/2021',
      events: [
        {
          id: 'opening',
          emoji: '🔗',
          title: 'Opening Ceremony',
          startHour: '19:00',
          endHour: '21:00',
          description:
            'Join us on twitch to be aware of everything will be happening this weekend',
        },
        {
          id: 'hacking-starts',
          title: 'Hacking Start!!!',
          startHour: '21:00',
          description: 'Hacking time is starting now!! 👨‍💻👩‍💻',
        },
        {
          id: 'activity-team-building',
          title: 'Team Building',
          startHour: '21:00',
          endHour: '21:30',
          description:
            'Are you looking for a team o for teammates? Join us on the Team Building activity',
        },
        {
          id: 'talk-infojobs',
          emoji: '🔗',
          title: 'InfoJobs Talk title',
          startHour: '21:30',
          endHour: '22:30',
          description: 'InfoJobs Talk description',
        },
        {
          id: 'talk-happyscribe',
          emoji: '🔗',
          title: 'HappyScribe talk title',
          startHour: '22:30',
          endHour: '23:00',
          description: 'HappyScribe talk description',
        },
        {
          id: 'talk-typeform',
          emoji: '🔗',
          title: 'Typeform talk title',
          startHour: '23:00',
          endHour: '23:30',
          description: 'Typeform talk description',
        },
        {
          id: 'talk-X',
          emoji: '🔗',
          title: 'X talk title',
          startHour: '23:30',
          endHour: '00:00',
          description: 'X talk description',
        },
      ],
    },
    {
      date: '15/5/2021',
      events: [
        {
          id: 'activity-sports',
          title: 'Sports activity',
          startHour: '10:00',
          endHour: '11:00',
          description: "Join us on discord and let's do some yoga to relax!",
        },
        {
          id: 'activity-nerf',
          title: 'Nerf activity',
          startHour: '12:00',
          endHour: '13:00',
          description:
            "Join the playground channel on discord and let's play some Krunker rounds!",
        },
        {
          id: 'activity-draw-1',
          emoji: '🔗',
          title: 'Draw',
          startHour: '17:45',
          endHour: '18:00',
          description:
            'Join us on twitch, we will be doing a draw with the participants of the photocall! Maybe you can win a pizza for dinner!',
        },
        {
          id: 'activity-freehand',
          title: 'FreeHand activity',
          startHour: '18:00',
          endHour: '19:00',
          description:
            'Join the playground channel on discord ... NOSE QUE POSAR HELP ;)',
        },
        {
          id: 'activity-draw-2',
          emoji: '🔗',
          title: 'Draw',
          startHour: '21:45',
          endHour: '22:00',
          description:
            'Join us on twitch, we will be doing a draw with the participants of the photocall!',
        },
        {
          id: 'activity-slideshare',
          emoji: '🔗',
          title: 'SlideShare Show',
          startHour: '22:00',
          endHour: '23:00',
          description:
            'Join us on twitch, or be part of the stream let your imagination fly!',
        },
      ],
    },
    {
      date: '16/5/2021',
      events: [
        {
          id: 'submisions',
          title: 'Hack submisions',
          startHour: '8:00',
          endHour: '9:15',
          description: 'Time to deliver your project on devpost!',
        },
        {
          id: 'hacking-ends',
          title: 'Hacking Ends',
          startHour: '09:00',
          description:
            "Remember to post your project on devpost or you don't be able to acces the prices!",
        },
        {
          id: 'demos',
          title: 'Demo time',
          startHour: '10:15',
          endHour: '13:30',
          description:
            'Follow the instructions in order to demo your project for the sponsor and for HackUPC team',
        },
        {
          id: 'activity-draw-3',
          title: 'Draw',
          emoji: '🔗',
          startHour: '13:30',
          endHour: '13:45',
          description:
            'Join us on twitch, we will be doing a draw with the participants of the photocall! Maybe you can win a pizza for lunch!',
        },
        {
          id: 'closing',
          emoji: '🔗',
          title: 'Closing ceremony',
          startHour: '14:30',
          endHour: '16:30',
          description: 'Winners announcements and thanks for all',
        },
      ],
    },
  ],
}