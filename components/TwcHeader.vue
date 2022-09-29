<template>
  <Popover class="relative bg-yellow-50 mb-1">
    <div class="absolute inset-0 shadow z-30 pointer-events-none" aria-hidden="true" />
    <div class="relative z-20">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 py-5 sm:px-6 sm:py-4 lg:px-8 md:justify-start md:space-x-10">
        <div>
          <nuxt-link class="flex" to="/">
            <twc-logo class="h-16 w-auto sm:h-16 " />
          </nuxt-link>
        </div>
      </div>
    </div>
  </Popover>
</template>

<script setup>
import { Popover, PopoverButton, PopoverGroup, PopoverPanel } from '@headlessui/vue'
import {
  Bars3Icon,
  BookmarkSquareIcon,
  BriefcaseIcon,
  CommandLineIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  CircleStackIcon,
  GlobeAltIcon,
  InformationCircleIcon,
  NewspaperIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  UserGroupIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline/index.js'
import { ChevronDownIcon } from '@heroicons/vue/20/solid/index.js'

const solutions = [
  {
    name: 'API Template Pack',
    description: "Develop dotnet based REST API's quickly  ",
    href: '../products/apitemplatepack',
    icon: CommandLineIcon,
  },
  {
    name: 'Threenine.Data',
    description: 'A Microsoft Entity Framework Core plugin providing Unit of work and repository pattern ',
    href: '../products/data',
    icon: CircleStackIcon,
  },
  { name: 'Stop Web Crawlers', description: "Your customers' data will be safe and secure.", href: '../products/stopwebcrawlers', icon: ShieldExclamationIcon }
]
const callsToAction = [
  { name: 'Contact', href: 'tel:+44-116-318-3635', icon: PhoneIcon },
]
const legal = [
  { name: 'Privacy', href: '../legal/privacy', icon: ShieldCheckIcon },
]
const resources = [
  { name: 'Blog', href: '../blog', icon: UserGroupIcon },

]
const blogPosts = [
  {
    id: 1,
    name: 'Boost your conversion rate',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
        'https://images.unsplash.com/photo-1558478551-1a378f63328e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2849&q=80',
  },
  {
    id: 2,
    name: 'How to use search engine optimization to drive traffic to your site',
    href: '#',
    preview: 'Eget ullamcorper ac ut vulputate fames nec mattis pellentesque elementum. Viverra tempor id mus.',
    imageUrl:
        'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2300&q=80',
  },
]
</script>
