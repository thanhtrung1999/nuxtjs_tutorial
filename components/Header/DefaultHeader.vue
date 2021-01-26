<template>
	<header>
		<nav>
			<ul>
				<li>
					<NuxtLink to="/">Home</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/decks">Decks</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/profile">Profile</NuxtLink>
				</li>
				<li>
					<NuxtLink to="/settings">Settings</NuxtLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style lang="scss">
  header {
    background-color: #000;
    color: #fff;
    ul {
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin: 0;
      padding: 0;
      li {
        padding: 10px;
        a {
          color: #fff;
          &.nuxt-link-exact-active {
            color: red
          }
        }
      }
    }
  }
</style>
